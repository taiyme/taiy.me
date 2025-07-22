import { Link, Script } from 'honox/server';

import { useMetadata } from '@/hooks/useMetadata';
import { generateHeadData } from '@/utils/generateHeadData';

export default function BaseHead() {
  const { metadata } = useMetadata();
  const {
    noIndex,
    title,
    titleWithSiteName,
    description,
    canonicalUrl,
    og,
  } = generateHeadData(metadata);

  return (
    <head prefix={og?.headPrefix}>
      <meta charset='utf-8' />
      <meta name='viewport' content='width=device-width,initial-scale=1,viewport-fit=cover,interactive-widget=overlays-content' />
      <meta name='format-detection' content='telephone=no,date=no,address=no,email=no,url=no' />
      {noIndex && (<meta name='robots' content='noindex' />)}
      {description && (<meta name='description' content={description} />)}
      <title>{titleWithSiteName}</title>
      {og != null && (
        <>
          <meta property='og:title' content={title} />
          {description && (<meta property='og:description' content={description} />)}
          <meta property='og:url' content={og.url} />
          <meta property='og:site_name' content={og.siteName} />
          <meta property='og:locale' content={og.locale} />
          <meta property='og:image' content={og.imageUrl} />
          <meta property='og:image:alt' content={og.imageAlt} />
          <meta property='og:image:type' content={og.imageType} />
          <meta property='og:image:width' content={og.imageWidth.toString()} />
          <meta property='og:image:height' content={og.imageHeight.toString()} />
          <meta property='og:type' content={og.type} />
          <meta name='twitter:card' content={og.cardType} />
        </>
      )}
      {canonicalUrl != null && (<link rel='canonical' href={canonicalUrl} />)}
      {!noIndex && (
        <>
          <link rel='me' href='https://misskey.io/@taiy' />
          <link rel='me' href='https://submarin.online/@taiy' />
          <link rel='me' href='https://submarin.online/@t' />
          <link rel='me' href='https://mk.taiy.me/@taiy' />
        </>
      )}
      <link
        rel='icon'
        href='/favicon.ico'
        type='image/x-icon'
        sizes='32x32'
      />
      <link
        rel='icon'
        href='/icon-192.png'
        type='image/png'
        sizes='192x192'
      />
      <link
        rel='icon'
        href='/icon-512.png'
        type='image/png'
        sizes='512x512'
      />
      <link
        rel='apple-touch-icon'
        href='/apple-touch-icon.png'
        type='image/png'
        sizes='180x180'
      />
      <Link href='/app/style.css' rel='stylesheet' />
      <Script src='/app/client.ts' async />
    </head>
  );
}
