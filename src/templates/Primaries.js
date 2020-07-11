import React from 'react';
import { Grid, Typography, Fab, Container } from '@material-ui/core';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { DC2019Result } from '@/data/ElectionResults';
import VoteVsSeatChart from '@/components/charts/VoteVsSeat';
import {
  calculateSeatBoxForPrimary,
  handleVideoUrl,
  getPeopleStatus,
} from '@/utils';
import { withLanguage, getLocalizedPath } from '@/utils/i18n';
import { Link, navigate, useStaticQuery, graphql } from 'gatsby';
import { PeopleBox } from '@/components/People';
import ResponsiveSections from '@/components/ResponsiveSections';
import List from '@/components/List';
import SEO from '@/components/seo';
import { CompactImageLinkBox } from '@/components/LinkBox';
import { useTheme } from '@material-ui/core/styles';
import { FaVoteYea } from 'react-icons/fa';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';

const Nav = styled.div`
  padding: ${props => props.theme.spacing(1)}px 0;
  overflow-x: auto;
  white-space: nowrap;

  .nav-link {
    color: ${props => props.theme.palette.text.primary};
    text-decoration: none;
    font-size: 1rem;
    margin-bottom: ${props => props.theme.spacing(1)}px;
    margin-right: ${props => props.theme.spacing(1)}px;
    padding: 4px 8px;
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
`;

const CandidatesWrapper = styled.div`
  margin-top: ${props => props.theme.spacing(2)}px;
  display: grid;
  grid-row-gap: ${props => props.theme.spacing(1)}px;
  grid-column-gap: ${props => props.theme.spacing(1.5)}px;
  grid-template-columns: repeat(2, 1fr);

  ${props => props.theme.breakpoints.up('sm')} {
    grid-template-columns: repeat(4, 1fr);
  }

  ${props => props.theme.breakpoints.up('md')} {
    grid-template-columns: repeat(6, 1fr);
  }

  .candi-box {
    display: flex;
    align-items: center;
  }
`;

const PrimaryTemplate = ({
  pageContext: { uri, allConstituencies, constituency, candidates, assets },
}) => {
  const { t, i18n } = useTranslation();

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `
  );

  const theme = useTheme();

  const sections = [];

  if (assets.length) {
    sections.push({
      name: 'election_forum',
      title: t('election_forum'),
      content: (
        <List>
          {assets.map(asset => (
            <CompactImageLinkBox
              key={asset.id}
              onClick={() => {
                window.open(
                  handleVideoUrl({
                    assetId: asset.asset_id,
                    type: asset.type,
                  }).videoUrl,
                  '_blank'
                );
              }}
              image={
                <img
                  style={{
                    height: '100%',
                  }}
                  src={
                    handleVideoUrl({
                      assetId: asset.asset_id,
                      type: asset.type,
                      thumbnailUrl: asset.thumbnail_url,
                    }).imgUrl
                  }
                  alt={asset.title}
                />
              }
              title={asset.title}
              subTitle={asset.channel}
            />
          ))}
        </List>
      ),
    });
  }
  return (
    <>
      <SEO
        uri={uri}
        titleOveride={`${t('primary.title')} | ${withLanguage(
          i18n,
          constituency,
          'name'
        )}`}
        // TODO: duplicated entries, filter out in SEO later?
        meta={[
          {
            property: 'og:title',
            content: `${t('primary.title')} | ${withLanguage(
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
      <Nav>
        {allConstituencies.map(c => (
          <Link
            key={c.node.key}
            className={`nav-link ${
              c.node.key === constituency.key ? 'active' : ''
            }`}
            to={getLocalizedPath(i18n, `/primaries/${c.node.key}`)}
          >
            {withLanguage(i18n, c.node, 'alias')}
          </Link>
        ))}
      </Nav>
      <Header container justify="flex-start">
        <Grid item>
          <Grid
            container
            direction="column"
            justify="center"
            className="title-box"
          >
            <Typography variant="h3">
              {withLanguage(i18n, constituency, 'name')}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {withLanguage(i18n, constituency, 'primary_rule')}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {t('list_count', { list_count: candidates.length })}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={7}>
          {DC2019Result[constituency.key] && (
            <VoteVsSeatChart
              title={{
                vote: t('dc2019_demo_beijing_ratio'),
                seat:
                  Number(constituency.target) > 0
                    ? t('demo_target', { target: constituency.target })
                    : t('demo_target_not_decide'),
              }}
              votes={DC2019Result[constituency.key].votes}
              seats={calculateSeatBoxForPrimary(constituency)}
            />
          )}
        </Grid>
      </Header>
      {withLanguage(i18n, constituency, 'primary_description') && (
        <Typography
          className="block"
          variant="body1"
          dangerouslySetInnerHTML={{
            __html: withLanguage(i18n, constituency, 'primary_description'),
          }}
        />
      )}
      <CandidatesWrapper>
        {candidates
          .sort((a, b) => {
            if (a.node.name_en > b.node.name_en) {
              return 1;
            }
            return -1;
          })
          .map(c => (
            <Grid
              item
              key={withLanguage(i18n, c.node, 'name')}
              className="clickable"
            >
              <PeopleBox
                item
                imgUrl={`${site.siteMetadata.siteUrl}/images/avatars/${c.node.uuid}.png`}
                key={c.node.name_zh}
                info={c.node}
                name={withLanguage(i18n, c.node, 'name')}
                subText={
                  withLanguage(i18n, c.node, 'title') &&
                  withLanguage(i18n, c.node, 'title')
                    .split(/[，、,]+/)
                    .shift()
                }
                onClick={() => {
                  navigate(
                    getLocalizedPath(
                      i18n,
                      `/profile/${c.node.uuid}/${c.node.name_zh}`
                    )
                  );
                }}
                status={getPeopleStatus(c.node)}
              />
            </Grid>
          ))}
      </CandidatesWrapper>
      <ResponsiveSections
        sections={sections}
        pageName={`primary_${constituency.name_zh}`}
      />
      {['HKI', 'KLW', 'KLE', 'NTW', 'NTE', 'HS'].includes(constituency.key) && (
        <Container maxWidth="lg">
          <Fab
            className="clickable"
            onClick={() => {
              trackCustomEvent({
                category: 'primaries_stations',
                action: 'click_primaries_stations',
                label: constituency.name_zh,
              });
              navigate(
                getLocalizedPath(
                  i18n,
                  `/primaries/stations/${constituency.key}`
                )
              );
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
            <FaVoteYea
              style={{
                width: 24,
                height: 24,
                marginRight: theme.spacing(1),
              }}
            />
            {t('primaries_stations.title')}
          </Fab>
        </Container>
      )}
    </>
  );
};

export default PrimaryTemplate;
