import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { withLanguage, getLocalizedPath } from '@/utils/i18n';
import { Link } from 'gatsby';
import ResponsiveSections from '@/components/ResponsiveSections';
import List from '@/components/List';
import SEO from '@/components/seo';
import { LinkBox } from '@/components/LinkBox';
import { useTheme } from '@material-ui/core/styles';
import { RiDirectionLine } from 'react-icons/ri';

const Nav = styled.div`
  padding-bottom: ${props => props.theme.spacing(1)}px;
  overflow-x: auto;
  white-space: nowrap;

  .nav-link {
    color: ${props => props.theme.palette.text.primary};
    text-decoration: none;
    font-size: 14px;
    margin-bottom: ${props => props.theme.spacing(1)}px;
    margin-right: ${props => props.theme.spacing(1)}px;
    padding: 3px 8px;
  }

  .active {
    font-weight: 700;
    color: #ffffff;
    background: ${props => props.theme.palette.secondary.main};
    border-radius: 5px;
  }
`;

const Header = styled(Grid)`
  margin-bottom: ${props => props.theme.spacing(2)}px;

  .title-box {
    margin-right: ${props => props.theme.spacing(3)}px;
  }
  }
  .title {
    font-size: 24px;
    font-weight: 700;
  }
`;

const StationBox = styled.div`
  padding: ${props => props.theme.spacing(1.5)}px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .content {
    margin-right: ${props => props.theme.spacing(1)}px;
  }

  .icon {
    width: 24px;
    height: 24px;
  }

  .paper-vote-text {
    background: ${props => props.theme.palette.secondary.main};
    padding: 3px 8px;
    color: #ffffff;
  }
`;

const PrimariesStationsTemplate = ({
  pageContext: { uri, constituency, allConstituencies, stations },
}) => {
  const { t, i18n } = useTranslation();

  const theme = useTheme();

  const sections = [];

  sections.push({
    name: 'primaries_stations.title',
    title: t('primaries_stations.title'),
    content: (
      <List>
        {stations.map(station => (
          <LinkBox
            key={station.id}
            onClick={() => {
              window.open(
                `https://maps.google.com/?q=${station.address_zh}`,
                '_blank'
              );
            }}
          >
            <StationBox theme={theme}>
              <div className="content">
                <Typography variant="caption" color="textSecondary">
                  {withLanguage(i18n, station, 'dc_name')}
                </Typography>
                <Typography variant="h5">
                  {withLanguage(i18n, station, 'address')}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {withLanguage(i18n, station, 'remarks')}
                </Typography>
                {station.paper_vote === 'Y' && (
                  <Typography variant="caption" className="paper-vote-text">
                    {t('paper_vote')}
                  </Typography>
                )}
              </div>
              <div>
                <RiDirectionLine className="icon" />
              </div>
            </StationBox>
          </LinkBox>
        ))}
      </List>
    ),
  });

  return (
    <>
      <SEO
        uri={uri}
        titleOveride={`${t('primaries_stations.title')} | ${withLanguage(
          i18n,
          constituency,
          'name'
        )}`}
        // TODO: duplicated entries, filter out in SEO later?
        meta={[
          {
            property: 'og:title',
            content: `${t('primaries_stations.title')} | ${withLanguage(
              i18n,
              constituency,
              'name'
            )}`,
          },
          {
            property: 'og:description',
            content: withLanguage(i18n, constituency, 'primary_description'),
          },
        ]}
      />
      <Nav theme={theme}>
        {allConstituencies.map(c => (
          <Link
            key={c.node.key}
            className={`nav-link ${
              c.node.key === constituency.key ? 'active' : ''
            }`}
            to={getLocalizedPath(i18n, `/primaries/stations/${c.node.key}`)}
          >
            {withLanguage(i18n, c.node, 'alias')}
          </Link>
        ))}
      </Nav>
      <Header container theme={theme}>
        <Grid item>
          <Grid
            container
            direction="column"
            justify="center"
            className="title-box"
          >
            <div className="title">
              {withLanguage(i18n, constituency, 'name')}
            </div>
            <div dangerouslySetInnerHTML={{ __html: t('primaries_rules') }} />
          </Grid>
        </Grid>
      </Header>

      <ResponsiveSections
        sections={sections}
        pageName={`primary_${constituency.name_zh}`}
      />
    </>
  );
};

export default PrimariesStationsTemplate;
