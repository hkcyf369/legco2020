import React from 'react';
import { Grid, Typography, Fab, Container } from '@material-ui/core';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { withLanguage, getLocalizedPath } from '@/utils/i18n';
import { Link, navigate } from 'gatsby';
import ResponsiveSections from '@/components/ResponsiveSections';
import List from '@/components/List';
import SEO from '@/components/seo';
import { LinkBox } from '@/components/LinkBox';
import { useTheme } from '@material-ui/core/styles';
import { RiDirectionLine } from 'react-icons/ri';
import { BsPeopleFill } from 'react-icons/bs';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';

const PrimariesStationsWrapper = styled.div`
  .group-title {
    font-size: 1rem;
    font-weight: 500;
    margin: ${props => props.theme.spacing(2)}px 0;
  }
`

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

  const grouppedStations = stations.reduce((a, c) => {
    const idx = a.findIndex(element => element.dc_code === c.dc_code);
    if (idx < 0) {
      return [
        ...a,
        {
          key: c.dc_code,
          dc_code: c.dc_code,
          title: withLanguage(i18n, c, 'dc_name'),
          stations: [c],
        },
      ];
    }

    a[idx].stations.push(c);
    return a;
  }, []);

  grouppedStations
    .sort((a, b) => {
      if (a.dc_code > b.dc_code) return 1;
      if (a.dc_code < b.dc_code) return -1;
      return 0;
    })
    .forEach(group => {
      sections.push({
        name: group.title,
        title: group.title,
        content: (
          <List>
            {group.stations.map(station => (
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
    });

  return (
    <PrimariesStationsWrapper theme={theme}>
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
        variant='scrollable'
        sections={sections}
        pageName={`primary_${constituency.name_zh}`}
      />
      <Container maxWidth="lg">
        <Fab
          className="clickable"
          onClick={() => {
            trackCustomEvent({
              category: 'primaries',
              action: 'click_primaries_stations',
              label: constituency.name_zh,
            });
            navigate(getLocalizedPath(i18n, `/primary/${constituency.key}`));
          }}
          variant="extended"
          size="medium"
          aria-label="add"
          style={{
            position: 'fixed',
            bottom: theme.spacing(2),
            right: theme.spacing(2),
            backgroundColor: theme.palette.secondary.main,
            color: '#FFFFFF',
          }}
        >
          <BsPeopleFill
            style={{
              width: 24,
              height: 24,
              marginRight: theme.spacing(1),
            }}
          />
          {t('primaries_candidates')}
        </Fab>
      </Container>
    </PrimariesStationsWrapper>
  );
};

export default PrimariesStationsTemplate;
