import { get } from '@/utils/';
import { removePathTrailingSlash } from '@/utils/urlHelper';
import { useStaticQuery, graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';

export const withLanguage = (
  i18n,
  object,
  path,
  checkPendingTranslation = false
) => {
  if (
    checkPendingTranslation &&
    i18n.language === 'en' &&
    get(object, `${path}_zh`) &&
    !get(object, `${path}_en`)
  ) {
    // Add prefix for untranslated text
    return `[Pending Translation] ${get(object, `${path}_zh`)}`;
  }

  return (
    get(object, `${path}_${i18n.language}`) || get(object, `${path}_zh`) || ''
  );
};

export const withLanguagePendingTranslation = (i18n, object, path) => {
  if (get(object, `${path}_zh`) && !get(object, `${path}_zh`)) {
    return `[Pending Translation] ${get(object, `${path}_${i18n.language}`)}`;
  }
  return (
    get(object, `${path}_${i18n.language}`) || get(object, `${path}_zh`) || ''
  );
};

export const getLocalizedPath = (i18n, path) => {
  return removePathTrailingSlash(i18n.language === 'en' ? `/en${path}` : path);
};

export const useRemoteI18n = (checkPendingTranslation = false) => {
  const data = useStaticQuery(graphql`
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
    }
  `);

  const { i18n } = useTranslation();

  return key => {
    const item = data.allI18N.edges.find(e => e.node.key === key);
    return !item
      ? ''
      : withLanguage(i18n, item.node, 'text', checkPendingTranslation);
  };
};
