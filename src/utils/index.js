import React from 'react';
import { seatColorMapping } from '@/config';
import { IoMdRemoveCircle } from 'react-icons/io';

export function openInNewTab(url) {
  const win = window.open(url, '_blank');
  win.focus();
}

export function calculateSeatBox(e) {
  const expectedWinDemo = Number(e.expected_win_demo) || 0;
  const unresolvedSeats = Number(e.unresolved_seats) || 0;
  const expectedWinBeijing = Number(e.expected_win_beijing) || 0;

  return [
    ...[...Array(expectedWinDemo).keys()].map(() => ({
      color: seatColorMapping.FC_EXPECTED_WIN_DEMO,
    })),
    ...[...Array(unresolvedSeats).keys()].map(() => ({
      color: seatColorMapping.UNRESOLVED,
    })),
    ...[...Array(expectedWinBeijing).keys()].map(() => ({
      color: seatColorMapping.FC_EXPECTED_WIN_BEIJING,
    })),
  ];
}

export function calculateSeatBoxForPrimary(e) {
  const baseRow = [...Array(Number(e.seats)).keys()].map(() => ({
    color: seatColorMapping.UNRESOLVED,
  }));

  if (!e.target) {
    return baseRow;
  }

  return baseRow.map((row, i) => {
    const newRow = row;
    if (i < Number(e.target)) {
      newRow.color = seatColorMapping.FC_EXPECTED_WIN_DEMO;
    }
    return newRow;
  });
}

export const saveToLocalStorage = (key, value) => {
  if (typeof Storage !== 'undefined') {
    window.localStorage.setItem(key, value);
  }
};

export const get = (obj, path, defaultValue = undefined) => {
  const travel = regexp =>
    String.prototype.split
      .call(path, regexp)
      .filter(Boolean)
      .reduce(
        (res, key) => (res !== null && res !== undefined ? res[key] : res),
        obj
      );
  const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
  return result === undefined || result === obj ? defaultValue : result;
};

export const handleVideoUrl = ({ assetId, type, thumbnailUrl }) => {
  let videoUrl;
  let imgUrl;
  switch (type) {
    case 'facebook':
      videoUrl = `https://www.facebook.com/watch/?v=${assetId}`;
      imgUrl = thumbnailUrl;
      break;
    case 'youtube':
    default:
      videoUrl = `https://www.youtube.com/watch?v=${assetId}`;
      imgUrl = `https://i.ytimg.com/vi/${assetId}/hqdefault.jpg`;
      break;
  }
  return {
    videoUrl,
    imgUrl,
  };
};

export const getPeopleStatus = people => {
  if (people.tags.findIndex(c => c.name_zh === '已退出初選') > -1) {
    return {
      icon: <IoMdRemoveCircle />,
      opacity: 0.5,
    };
  }

  return {
    opacity: 1,
  };
};

export const formatNumber = num =>
  num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

export const BrowserText = (function () {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  /**
   * Measures the rendered width of arbitrary text given the font size and font face
   * @param {string} text The text to measure
   * @param {number} fontSize The font size in pixels
   * @param {string} fontFace The font face ("Arial", "Helvetica", etc.)
   * @returns {number} The width of the text
   * */
  function getWidth(text, fontSize, fontFace) {
    context.font = `${fontSize}px ${fontFace}`;
    return context.measureText(text).width;
  }

  return {
    getWidth,
  };
})();
