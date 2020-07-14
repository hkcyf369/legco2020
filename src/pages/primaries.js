import React from 'react';
import SEO from '@/components/seo';
import { graphql, navigate } from 'gatsby';
import { Typography, Button, Grid } from '@material-ui/core';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { withLanguage, useRemoteI18n, getLocalizedPath } from '@/utils/i18n';
import { FaVoteYea } from 'react-icons/fa';

const DirectHeader = styled.div`
  margin: ${props => props.theme.spacing(2)}px 0;

  a {
    font-weight: 700;
    color: ${props => props.theme.palette.text.primary};
    border-bottom: 3px ${props => props.theme.palette.secondary.main} solid;
    text-decoration: none;
  }

  a:hover {
    font-weight: 700;
    color: ${props => props.theme.palette.secondary.main};
    background: ${props => props.theme.palette.text.primary};
    text-decoration: none;
  }
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
    data: { allPrimary, allCandidates },
  } = props;

  const { t } = useTranslation();

  const { i18n } = useTranslation();

  const renderConstituencies = edges => {
    return (
      <>
        <DirectWrapper>
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
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography variant="caption" color="textSecondary">
                        {t('no_of_seats', { seats: e.seats })}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="caption">
                        {withLanguage(i18n, e, 'primary_rule')}
                      </Typography>
                    </Grid>
                  </Grid>
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
                      <Typography variant="body1" color="textSecondary">
                        {t('lists')}
                      </Typography>
                    </div>
                    {Number(e.target) > 0 && (
                      <div className="center">
                        <div className="large-number">{e.target || '-'}</div>
                        <Typography variant="body1" color="textSecondary">
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

  const ri18n = useRemoteI18n();

  return (
    <>
      <SEO title="Primary" />
      <DirectHeader>
        <Typography variant="h3" gutterBottom>
          {t('demo_primaries.title')}
        </Typography>
        <Typography
          variant="body1"
          dangerouslySetInnerHTML={{
            __html: ri18n('primaries_rules'),
          }}
        />
        <Button
          className="clickable"
          onClick={() => {
            navigate(getLocalizedPath(i18n, '/primaries/stations/HKI'));
          }}
          variant="contained"
          color="secondary"
          startIcon={<FaVoteYea />}
        >
          {t('primaries_stations.title')}
        </Button>
      </DirectHeader>
      <>{renderConstituencies(allPrimary.edges)}</>
    </>
  );
};

export default PrimaryPage;

export const PrimaryPageQuery = graphql`
  query {
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
