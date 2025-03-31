import { Link, Script } from 'honox/server';
import type { AllUnionFields } from 'type-fest';

import { OG_DEFAULT_IMAGE } from '@/constants/og';
import { SITE_BASE_URL, SITE_NAME } from '@/constants/site';
import type { Metadata } from '@/types/metadata';

type Props = Readonly<
  AllUnionFields<Metadata>
>;

export default function BaseHead(props: Props) {
  const { noIndex = false } = props;

  const pageTitle = props.title || SITE_NAME;

  const fullTitle = (
    pageTitle === SITE_NAME
      ? pageTitle
      : `${pageTitle} - ${SITE_NAME}`
  );

  const pageUrl = (
    props.path != null
      ? new URL(props.path, SITE_BASE_URL).href
      : null
  );

  const description = props.description || null;

  const og = (() => {
    if (noIndex) return null;
    if (pageUrl == null) return null;

    const ogType = props.ogType ?? 'website';
    const cardType = props.cardType ?? 'summary';

    const url = pageUrl;

    let {
      ogImageUrl: imageSrc,
      ogImageAlt: imageAlt,
      ogImageType: imageType,
      ogImageWidth: imageWidth,
      ogImageHeight: imageHeight,
    } = props;

    if (imageSrc == null || imageAlt == null || imageType == null || imageWidth == null || imageHeight == null) {
      imageSrc = OG_DEFAULT_IMAGE.ogImageUrl;
      imageAlt = OG_DEFAULT_IMAGE.ogImageAlt;
      imageType = OG_DEFAULT_IMAGE.ogImageType;
      imageWidth = OG_DEFAULT_IMAGE.ogImageWidth;
      imageHeight = OG_DEFAULT_IMAGE.ogImageHeight;
    }

    return { ogType, cardType, url, imageSrc, imageAlt, imageType, imageWidth, imageHeight } as const;
  })();

  return (
    <head prefix={og != null ? 'og: https://ogp.me/ns#' : undefined}>
      <meta charset='utf-8' />
      <meta name='viewport' content='width=device-width,initial-scale=1,viewport-fit=cover,interactive-widget=overlays-content' />
      <meta name='format-detection' content='telephone=no,date=no,address=no,email=no,url=no' />
      {noIndex && (<meta name='robots' content='noindex' />)}
      {description && (<meta name='description' content={description} />)}
      <title>{fullTitle}</title>
      <style>{'@view-transition{navigation:auto;}'}</style>
      {og != null && (
        <>
          <meta property='og:title' content={pageTitle} />
          {description && (<meta property='og:description' content={description} />)}
          <meta property='og:url' content={og.url} />
          <meta property='og:site_name' content={SITE_NAME} />
          <meta property='og:locale' content='ja_JP' />
          <meta property='og:image' content={og.imageSrc} />
          <meta property='og:image:alt' content={og.imageAlt} />
          <meta property='og:image:type' content={og.imageType} />
          <meta property='og:image:width' content={og.imageWidth.toString()} />
          <meta property='og:image:height' content={og.imageHeight.toString()} />
          <meta property='og:type' content={og.ogType} />
          <meta name='twitter:card' content={og.cardType} />
        </>
      )}
      {pageUrl != null && (<link rel='canonical' href={pageUrl} />)}
      <link rel='me' href='https://misskey.io/@taiy' />
      <link rel='me' href='https://submarin.online/@taiy' />
      <link rel='me' href='https://submarin.online/@t' />
      <link rel='me' href='https://mk.taiy.me/@taiy' />
      <link
        rel='icon'
        href='/images/favicons/favicon.ico'
        type='image/x-icon'
        sizes='32x32'
      />
      <link
        rel='icon'
        href='/images/favicons/icon-192.png'
        type='image/png'
        sizes='192x192'
      />
      <link
        rel='icon'
        href='/images/favicons/icon-512.png'
        type='image/png'
        sizes='512x512'
      />
      <link
        rel='apple-touch-icon'
        href='/images/favicons/apple-touch-icon.png'
        type='image/png'
        sizes='180x180'
      />
      <Link href='/app/style.css' rel='stylesheet' />
      <Script src='/app/client.ts' async />
    </head>
  );
}
