import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import styled from 'styled-components';

import { useTranslation } from 'react-i18next';
import moment from 'moment';
import { FcLike } from 'react-icons/fc';
import { IoMdHeartDislike, IoMdTrendingUp } from 'react-icons/io';
import { MdModeComment } from 'react-icons/md';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';

const MetricsWrapper = styled(Grid)`
  margin-top: ${props => props.theme.spacing(1)}px;
  display: flex;
  align-items: center;
  font-size: 12px;

  svg {
    margin-right: 3px;
  }
`;

const Post = styled.div`
  padding: ${props => props.theme.spacing(1)}px ${props => props.theme.spacing(1.5)}px;
  box-shadow: 0 1px 6px 0 ${props => props.theme.palette.divider};

  .sub-title {
    display: flex;
    justify-content: space-between;
    margin-bottom: ${props => props.theme.spacing(1)}px;
  }

  .title {
    font-weight: 500;
    word-wrap: break-word;
  }
`;

const SocialPost = ({ post, candiName }) => {
  const { t } = useTranslation();
  
  
  return (
    <Post
      className="clickable"
      onClick={() => {
        if (post.platformUrl) {
          trackCustomEvent({
            category: 'social_post',
            action: 'click',
            label: `${candiName}_${post.platformUrl}`,
          });
          window.open(post.platformUrl, '_blank');
        } else if (
          post.poster.platform.name === 'facebook' &&
          post.platformId
        ) {
          trackCustomEvent({
            category: 'social_post',
            action: 'click',
            label: `${candiName}_https://www.facebook.com/${post.platformId}`,
          });
          window.open(`https://www.facebook.com/${post.platformId}`, '_blank');
        }
      }}
     
    >
      <div className="sub-title">
        {post.group && (
          <Typography variant="caption">
            {t(`platform.${post.group.platform.name}`)} {post.group.name}
          </Typography>
        )}
        <Typography variant="caption">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>

      <div className="title">{post.title || post.content}</div>

      <Grid container spacing={3}>
        <MetricsWrapper item>
          <IoMdTrendingUp />
          {post.performance ? `${post.performance.toFixed(2)}x` : '-'}
        </MetricsWrapper>
        <MetricsWrapper item>
          <FcLike /> {post.likeCount || '-'}
        </MetricsWrapper>
        <MetricsWrapper item>
          <IoMdHeartDislike /> {post.dislikeCount || '-'}
        </MetricsWrapper>
        <MetricsWrapper item>
          <MdModeComment /> {post.replyCount || '-'}
        </MetricsWrapper>
      </Grid>
    </Post>
  );
};

export default SocialPost;
