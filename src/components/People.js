import React from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';
import { formatNumber } from '@/utils';
import { withLanguage } from '@/utils/i18n';

const campColorMapping = (camp, theme) => {
  const mapping = {
    demo: theme.palette.warning.main,
    beijing: theme.palette.info.main,
    other: theme.palette.success.main,
  };
  return mapping[camp];
};

const CampAvatar = styled(Avatar)`
  width: ${props => props.xsdimension || 48}px;
  height: ${props => props.xsdimension || 48}px;
  border: ${props => (props.camp ? props.border || 3 : 0)}px
    ${props => campColorMapping(props.camp, props.theme)} solid;
  opacity: ${props => props.opacity || 1};
`;

const PeopleWrapper = styled.div`
  .avatar-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-end;
  }

  ${props => props.theme.breakpoints.up('md')} {
    .avatar {
      width: 64px;
      height: 64px;
    }
  }

  .avatar.demo {
    border: 3px ${props => props.theme.palette.warning.main} solid;
  }

  .avatar.beijing {
    border: 3px ${props => props.theme.palette.info.main} solid;
  }

  .avatar.other {
    border: 3px ${props => props.theme.palette.success.main} solid;
  }

  .center {
    font-size: 12px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Bar = styled.div`
  height: 16px;
  border-radius: 16px;
  background: ${props => props.theme.palette.secondary.main};
  width: ${props => props.width}%;
`;

export const PeopleCircle = ({
  info,
  imgUrl,
  onClick,
  xsdimension,
  showName = true,
  ...props
}) => {
  const { i18n } = useTranslation();
  const name = withLanguage(i18n, info, 'name');
  return (
    <PeopleWrapper
      className="avatar-group clickable"
      onClick={onClick}
      onKeyDown={() => {}}
    >
      <div className="center" {...props}>
        <CampAvatar
          alt={name}
          src={imgUrl}
          camp={info.camp && info.camp.toLowerCase()}
          xsdimension={xsdimension}
        >
          <img
            alt={name}
            src={info.img_url}
            style={{
              maxWidth: '100%',
            }}
          />
        </CampAvatar>
        {showName && (
          <span>
            {`${name}${
              info.tags &&
              info.tags.findIndex(tag => tag.name_zh === '不參加民主派初選') !==
                -1
                ? '*'
                : ''
            }`}
          </span>
        )}
      </div>
    </PeopleWrapper>
  );
};

export const PeopleBox = ({ onClick, name, info, subText, imgUrl, status }) => {
  const Wrapper = styled.div`
    display: flex;

    .avatar-wrapper {
      position: relative;

      .icon {
        position: absolute;
        bottom: 0;
        right: 0;
        svg {
          width: 20px;
          height: 20px;
        }
      }
    }

    .main {
      margin-left: ${props => props.theme.spacing(1)}px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .subText {
      line-height: 0.9rem;
    }
  `;
  return (
    <Wrapper item onClick={onClick}>
      <div className="avatar-wrapper">
        <CampAvatar
          alt={name}
          src={imgUrl}
          camp={info.camp.toLowerCase()}
          xsdimension={56}
          border={5}
          opacity={status.opacity}
        >
          <img
            alt={name}
            src={info.img_url}
            style={{
              maxWidth: '100%',
            }}
          />
        </CampAvatar>
        {status.icon && <div className="icon">{status.icon}</div>}
      </div>
      <div className="main">
        <Typography variant="h5">{name}</Typography>
        <Typography className="subText" variant="caption" color="textSecondary">
          {subText}
        </Typography>
      </div>
    </Wrapper>
  );
};

export const PeopleResultBox = ({
  onClick,
  name,
  info,
  votes,
  percentage,
  width,
  imgUrl,
  status,
  isWin,
}) => {
  const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 72px 1fr;
    grid-column-gap: ${props => props.theme.spacing(1.5)}px;

    .avatar-wrapper {
      position: relative;

      .icon {
        position: absolute;
        bottom: 0;
        right: 0;
        svg {
          width: 20px;
          height: 20px;
        }
      }
    }

    .main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;

      .votes {
        display: flex;
        align-items: baseline;
      }

      .percentage {
        margin-left: 8px;
        font-weight: 600;
      }
    }
  `;

  const { t } = useTranslation();
  return (
    <Wrapper item onClick={onClick}>
      <div className="avatar-wrapper">
        <CampAvatar
          alt={name}
          src={imgUrl}
          camp={info.camp.toLowerCase()}
          xsdimension={isWin ? 72 : 64}
          border={5}
          opacity={status.opacity}
        >
          <img
            alt={name}
            src={info.img_url}
            style={{
              maxWidth: '100%',
            }}
          />
        </CampAvatar>
        {status.icon && <div className="icon">{status.icon}</div>}
      </div>
      <div className="main">
        <Typography variant="h5">{name}</Typography>
        {votes ? (
          <>
            <div className="votes">
              <Typography variant="h5">
                {t('people_votes', { votes: formatNumber(votes) })}
              </Typography>
              <Typography
                variant="h6"
                className="percentage"
                color="textSecondary"
              >
                ({(percentage * 100).toFixed(2)}%)
              </Typography>
            </div>
            <Bar width={width} />
          </>
        ) : (
          <>-</>
        )}
      </div>
    </Wrapper>
  );
};
