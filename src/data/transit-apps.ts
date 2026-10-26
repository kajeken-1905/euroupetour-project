// Shared by the country (transit.ts) and city (transit-city.ts) transit data.
import type { TransitApp, TransitModeId } from '../types'

export const TRANSIT_MODE_ORDER: TransitModeId[] = [
  'metro',
  'tram',
  'bus',
  'train',
  'ferry',
  'rideshare',
  'taxi',
  'bike',
  'walk',
]

const APP_CATALOG = {
  uber: { name: 'Uber', url: 'https://www.uber.com/', icon: '/transit-apps/uber.png' },
  citymapper: { name: 'Citymapper', url: 'https://citymapper.com/', icon: '/transit-apps/citymapper.png' },
  'free-now': { name: 'Free Now', url: 'https://www.free-now.com/', icon: '/transit-apps/free-now.png' },
  cabify: { name: 'Cabify', url: 'https://cabify.com/', icon: '/transit-apps/cabify.png' },
  bolt: { name: 'Bolt', url: 'https://bolt.eu/', icon: '/transit-apps/bolt.png' },
  flixbus: { name: 'FlixBus', url: 'https://www.flixbus.com/', icon: '/transit-apps/flixbus.png' },
  trainline: { name: 'Trainline', url: 'https://www.thetrainline.com/', icon: '/transit-apps/trainline.png' },
  renfe: { name: 'Renfe', url: 'https://www.renfe.com/', icon: '/transit-apps/renfe.png' },
  'renfe-cercanias': {
    name: 'Renfe Cercanías',
    url: 'https://www.renfe.com/',
    icon: '/transit-apps/renfe.png',
  },
  alsa: { name: 'ALSA', url: 'https://www.alsa.com/', icon: '/transit-apps/alsa.png' },
  cp: { name: 'CP Oficial', url: 'https://www.cp.pt/', icon: '/transit-apps/cp.png' },
  'rede-expressos': {
    name: 'Rede Expressos',
    url: 'https://www.rede-expressos.pt/',
    icon: '/transit-apps/rede-expressos.png',
  },
  carris: { name: 'Carris', url: 'https://www.carris.pt/', icon: '/transit-apps/carris.png' },
  'metro-lisboa': {
    name: 'Metro Lisboa',
    url: 'https://www.metrolisboa.pt/',
    icon: '/transit-apps/metro-lisboa.png',
  },
  'metro-porto': {
    name: 'Metro do Porto',
    url: 'https://www.metrodoporto.pt/',
    icon: '/transit-apps/metro-porto.png',
  },
  'metro-madrid': {
    name: 'Metro de Madrid',
    url: 'https://www.metromadrid.es/',
    icon: '/transit-apps/metro-madrid.png',
  },
  tmb: { name: 'TMB App', url: 'https://www.tmb.cat/', icon: '/transit-apps/tmb.png' },
  tussam: { name: 'TUSSAM', url: 'https://www.tussam.es/', icon: '/transit-apps/tussam.png' },
  metrovalencia: {
    name: 'Metrovalencia',
    url: 'https://www.metrovalencia.es/',
    icon: '/transit-apps/metrovalencia.png',
  },
  gibraltar: {
    name: 'Gibraltar info',
    url: 'https://www.visitgibraltar.gi/',
    icon: '/transit-apps/gibraltar.png',
  },
  sncf: { name: 'SNCF Connect', url: 'https://www.sncf-connect.com/', icon: '/transit-apps/sncf.png' },
  idfm: { name: 'Île-de-France Mobilités', url: 'https://www.iledefrance-mobilites.fr/', icon: '/transit-apps/idfm.png' },
  tfl: { name: 'TfL Go', url: 'https://tfl.gov.uk/', icon: '/transit-apps/tfl.png' },
  'irish-rail': { name: 'Irish Rail', url: 'https://www.irishrail.ie/', icon: '/transit-apps/irish-rail.png' },
  sncb: { name: 'SNCB/NMBS', url: 'https://www.belgiantrain.be/', icon: '/transit-apps/sncb.png' },
  ns: { name: 'NS', url: 'https://www.ns.nl/', icon: '/transit-apps/ns.png' },
  cfl: { name: 'CFL', url: 'https://www.cfl.lu/', icon: '/transit-apps/cfl.png' },
  db: { name: 'DB Navigator', url: 'https://int.bahn.de/', icon: '/transit-apps/db.png' },
  sbb: { name: 'SBB Mobile', url: 'https://www.sbb.ch/', icon: '/transit-apps/sbb.png' },
  oebb: { name: 'ÖBB', url: 'https://www.oebb.at/', icon: '/transit-apps/oebb.png' },
  trenitalia: { name: 'Trenitalia', url: 'https://www.trenitalia.com/', icon: '/transit-apps/trenitalia.png' },
  cd: { name: 'České dráhy', url: 'https://www.cd.cz/', icon: '/transit-apps/cd.png' },
  mav: { name: 'MÁV', url: 'https://www.mavcsoport.hu/', icon: '/transit-apps/mav.png' },
  pkp: { name: 'PKP Intercity', url: 'https://www.intercity.pl/', icon: '/transit-apps/pkp.png' },
  dsb: { name: 'DSB', url: 'https://www.dsb.dk/', icon: '/transit-apps/dsb.png' },
  sj: { name: 'SJ', url: 'https://www.sj.se/', icon: '/transit-apps/sj.png' },
  vy: { name: 'Vy', url: 'https://www.vy.no/', icon: '/transit-apps/vy.png' },
  vr: { name: 'VR', url: 'https://www.vr.fi/', icon: '/transit-apps/vr.png' },
  'atm-milano': {
    name: 'ATM Milano',
    url: 'https://www.atm.it/it/ViaggiaConNoi/pagamenti_servizi_digitali/Pagine/ATMMobile.aspx',
    icon: '/transit-apps/atm-milano.png',
  },
  'at-bus': { name: 'at bus', url: 'https://www.at-bus.it/', icon: '/transit-apps/at-bus.png' },
  libertybus: { name: 'LibertyBus', url: 'https://www.libertybus.je/', icon: '/transit-apps/libertybus.png' },
  'buses-gg': { name: 'Buses gg', url: 'https://www.buses.gg/', icon: '/transit-apps/buses-gg.png' },
  'air-greenland': { name: 'Air Greenland', url: 'https://www.airgreenland.com/', icon: '/transit-apps/air-greenland.png' },
  'yandex-go': { name: 'Yandex Go', url: 'https://go.yandex/', icon: '/transit-apps/yandex-go.png' },
  'yandex-maps': { name: 'Yandex Maps', url: 'https://yandex.ru/maps/', icon: '/transit-apps/yandex-maps.png' },
  'moscow-metro': { name: 'Moscow Metro', url: 'https://apps.apple.com/ru/app/id1093391186', icon: '/transit-apps/moscow-metro.png' },
  'moscow-transport': {
    name: 'Moscow Transport',
    url: 'https://apps.apple.com/ru/app/id1227002793',
    icon: '/transit-apps/moscow-transport.png',
  },
  podorozhnik: {
    name: 'Podorozhnik',
    url: 'https://apps.apple.com/ru/app/id6478869877',
    icon: '/transit-apps/podorozhnik.png',
  },
} as const

type AppId = keyof typeof APP_CATALOG

export function ta(id: AppId, note?: { ko: string; en: string }): TransitApp {
  return note ? { ...APP_CATALOG[id], note } : { ...APP_CATALOG[id] }
}
