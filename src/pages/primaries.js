import React from 'react';
import SEO from '@/components/seo';
import { graphql, navigate } from 'gatsby';
import { useTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import {
  withLanguage,
  getLocalizedPath,
  withKeyAndLanguage,
} from '@/utils/i18n';

const DirectHeader = styled.div`
  margin: ${props => props.theme.spacing(2)}px 0;
`;

const DirectWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${props => props.theme.spacing(1)}px;

  ${props => props.theme.breakpoints.up('md')} {
    grid-template-columns: repeat(4, 1fr);
  }

  .seat {
    padding: ${props => props.theme.spacing(1)}px
      ${props => props.theme.spacing(1.5)}px;
    border-radius: 2px;
    box-shadow: 0 1px 6px 0 ${props => props.theme.palette.divider};

    .title {
      display: flex;
      justify-content: space-between;
    }

    .sub-title {
      font-size: 0.65rem;
    }

    .roundup-title {
      margin-top: ${props => props.theme.spacing(0.5)}px;
      display: flex;
      justify-content: space-between;
    }

    .roundup-title div {
      line-height: 0.5;
    }

    .roundup-title div:last-child {
      text-align: right;
    }

    .roundup {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }

    .center {
      text-align: center;
    }

    .large-number {
      font-size: 1.5rem;
      font-weight: 900;
    }

    .demo {
      color: ${props => props.theme.palette.warning.main};
    }
  }
`;

const PrimaryPage = props => {
  const {
    data: { allPrimary, allCandidates, allI18N },
  } = props;

  const { t } = useTranslation();
  const theme = useTheme();

  const { i18n } = useTranslation();

  const renderConstituencies = edges => {
    return (
      <>
        <DirectWrapper theme={theme}>
          {edges
            .sort((a, b) => {
              if (a.node.order > b.node.order) return 1;
              if (a.node.order < b.node.order) return -1;
              return 0;
            })
            .map(edge => {
              const { node: e } = edge;
              const candiDemo = allCandidates.edges.filter(
                p =>
                  p.node.constituency === e.key &&
                  p.node.camp === 'DEMO' &&
                  p.node.tags &&
                  p.node.tags.findIndex(tag => tag.name_zh === '民主派初選') !==
                    -1
              );

              return (
                <div
                  key={e.key}
                  className="seat clickable"
                  onClick={() => {
                    navigate(getLocalizedPath(i18n, `/primaries/${e.key}`));
                  }}
                >
                  <div className="title">
                    <Typography variant="caption" color="textSecondary">
                      {t('no_of_seats', { seats: e.seats })}
                    </Typography>
                    <div className="sub-title">
                      {withLanguage(i18n, e, 'primary_rule')}
                    </div>
                  </div>
                  <div className="title">
                    <div>
                      <Typography variant="h5">
                        {withLanguage(i18n, e, 'name')}
                      </Typography>
                    </div>
                    <div />
                  </div>
                  <div className="roundup-title">
                    <div />
                  </div>
                  <div className="roundup">
                    <div className="center">
                      <div className="large-number demo">
                        {candiDemo.length || '-'}
                      </div>
                      <Typography variant="body2" color="textSecondary">
                        {t('lists')}
                      </Typography>
                    </div>
                    {Number(e.target) > 0 && (
                      <div className="center">
                        <div className="large-number">{e.target || '-'}</div>
                        <Typography variant="body2" color="textSecondary">
                          {t('threshold')}
                        </Typography>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
        </DirectWrapper>
      </>
    );
  };

  return (
    <>
      <SEO title="Primary" />
      <DirectHeader theme={theme}>
        <Typography variant="h4" gutterBottom>
          {t('demo_primaries.title')}
        </Typography>
        <Typography
          variant="body2"
          dangerouslySetInnerHTML={{
            __html: withKeyAndLanguage(i18n, allI18N, 'primaries_rules'),
          }}
        />
      </DirectHeader>
      <>{renderConstituencies(allPrimary.edges)}</>
    </>
  );
};

export default PrimaryPage;

export const PrimaryPageQuery = graphql`
  query {
    allI18N {
      edges {
        node {
          key
          text_zh
          text_en
        }
      }
    }
    allPrimary {
      edges {
        node {
          key
          type
          name_zh
          name_en
          alias_zh
          alias_en
          target
          seats
          expected_win_demo
          primary_rule_zh
          primary_rule_en
          primary_description_zh
          primary_description_en
        }
      }
    }
    allCandidates(filter: { enabled: { eq: "Y" } }) {
      edges {
        node {
          uuid
          camp
          constituency
          tags {
            name_zh
          }
        }
      }
    }
  }
`;
