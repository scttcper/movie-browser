import styled from '@emotion/styled';
import React from 'react';

export enum Sites {
  amazon = 'amazon',
  amc = 'amc',
  apple = 'apple',
  directv = 'directv',
  disneyplus = 'disneyplus',
  fandangonow = 'fandangonow',
  googleplay = 'googleplay',
  hbo = 'hbo',
  hoopla = 'hoopla',
  hulu = 'hulu',
  microsoft = 'microsoft',
  netflix = 'netflix',
  playstation = 'playstation',
  popcornflix = 'popcornflix',
  redbox = 'redbox',
  rottentomatoes = 'rottentomatoes',
  tubi = 'tubi',
  vudu = 'vudu',
  youtube = 'youtube',
}

const friendlyNames = {
  [Sites.amazon]: 'Amazon',
  [Sites.amc]: 'AMC',
  [Sites.apple]: 'Apple',
  [Sites.directv]: 'DIRECTV',
  [Sites.disneyplus]: 'disneyplus',
  [Sites.fandangonow]: 'FandangoNOW',
  [Sites.googleplay]: 'Google Play',
  [Sites.hbo]: 'HBO',
  [Sites.hoopla]: 'Hoopla',
  [Sites.hulu]: 'Hulu',
  [Sites.microsoft]: 'Microsoft Store',
  [Sites.netflix]: 'netflix',
  [Sites.playstation]: 'PlayStation',
  [Sites.popcornflix]: 'Popcornflix',
  [Sites.redbox]: 'redbox',
  [Sites.rottentomatoes]: 'rottentomatoes',
  [Sites.tubi]: 'Tubi',
  [Sites.vudu]: 'Vudu',
  [Sites.youtube]: 'YouTube',
};

const brandSvg = {
  [Sites.amazon]: '/static/svg/amazon.svg',
  [Sites.amc]: '/static/svg/amc.svg',
  [Sites.apple]: '/static/svg/apple.svg',
  [Sites.directv]: '/static/svg/directv.svg',
  [Sites.disneyplus]: '/static/svg/disneyplus.svg',
  [Sites.fandangonow]: '/static/svg/fandangonow.svg',
  [Sites.googleplay]: '/static/svg/googleplay.svg',
  [Sites.hbo]: '/static/svg/hbo.svg',
  [Sites.hoopla]: '/static/svg/vudu.svg',
  [Sites.hulu]: '/static/svg/hulu.svg',
  [Sites.microsoft]: '/static/svg/microsoft.svg',
  [Sites.netflix]: '/static/svg/netflix.svg',
  [Sites.playstation]: '/static/svg/playstation.svg',
  [Sites.popcornflix]: '/static/svg/vudu.svg',
  [Sites.redbox]: '/static/svg/redbox.svg',
  [Sites.rottentomatoes]: '/static/svg/vudu.svg',
  [Sites.tubi]: '/static/svg/vudu.svg',
  [Sites.vudu]: '/static/svg/vudu.svg',
  [Sites.youtube]: '/static/svg/youtube.svg',
};

export const SiteBadge: React.FC<{ link: any }> = props => {
  return (
    <div>
      <a href={props.link.url} target="_blank" rel="noopener noreferrer">
        <Amc className="my-2 shadow-sm border">
          <div className="my-3">
            <img height="30" alt={`${friendlyNames[props.link.site]} logo`} src={brandSvg[props.link.site]} />
          </div>
          {/* <h4 className="mb-0">{friendlyNames[props.link.site]}</h4> */}
        </Amc>
      </a>
    </div>
  );
};

const Amc = styled.div`
  /* color: #e51937; */
  /* background-color: #000; */
  border-radius: 4px;
  padding: 10px;
  img {
    margin-top: auto;
    margin-bottom: auto;
  }
`;
