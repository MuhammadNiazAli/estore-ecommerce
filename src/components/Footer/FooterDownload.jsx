'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FiShoppingCart, FiStar, FiExternalLink } from 'react-icons/fi';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import {
  SiAmazon,
  SiEbay,
  SiAliexpress,
  SiWish,
  SiEtsy,
  SiWalmart,
  SiShopify,
  SiZalando,
  SiFlipkart,
  SiBigcommerce,
  SiMagento,
  SiSquarespace,
  SiWoo,
  SiPrestashop,
  SiGithub,
  SiGitlab,
  SiBitbucket,
  SiJenkins,
  SiDocker,
  SiKubernetes,
  SiHeroku,
  SiNetlify,
  SiVercel,
  SiFirebase,
  SiSlack,
  SiTrello,
  SiAsana,
  SiJira,
  SiNotion,
  SiPostman,
  SiStripe,
  SiPaypal,
  SiSquare,
  SiGooglepay,
  SiShopware,
  SiBigbasket,
  SiRakuten,
  SiTarget,
  SiAllegro,
  SiNewegg,
  SiCreativecommons,
  SiUpwork,
  SiFiverr,
  SiEnvato,
  SiCanva,
  SiAdobe,
  SiDropbox,
  SiTelegram,
  SiWhatsapp,
  SiDiscord,
  SiZoom,
  SiMicrosoftteams,
  SiFacebook,
  SiInstagram,
  SiTwitter,
  SiLinkedin,
  SiPinterest,
  SiTiktok,
  SiReddit,
  SiSnapchat,
  SiTumblr,
  SiVimeo,
  SiSoundcloud,
  SiSpotify,
  SiApplemusic,
  SiNetflix,
  SiHulu,
  SiDisneyplus,
  SiTwitch,
  SiGithubactions,
  SiCircleci,
  SiTravisci,
  SiBitrise,
  SiCpanel,
  SiApache,
  SiNginx,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiElasticsearch,
  SiGooglecloud,
  SiMicrosoftazure,
  SiAmazonaws,
  SiDigitalocean,
  SiTerraform,
  SiAnsible,
  SiPuppet,
  SiGrafana,
  SiPrometheus,
  SiDatadog,
  SiNewrelic,
  SiSplunk,
  SiAtlassian,
  SiConfluence,
  SiFigma,
  SiSketch,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeaftereffects,
  SiGoogleads,
  SiMailchimp,
  SiHubspot,
  SiZendesk,
  SiSalesforce,
  SiVenmo,
  SiCashapp,
  SiTransferwise,
  SiMonzo,
  SiRevolut,
  SiCoinbase,
  SiBinance,
  SiRobinhood,
  SiTradingview,
  SiZoominfo,
  SiCalendly,
  SiTodoist,
  SiEvernote,
  SiMicrosoftoffice,
  SiGoogleworkspace,
  SiClickup,
  SiMondaydotcom,
  SiZapier,
  SiIFTTT,
  SiWebflow,
  SiWordpress,
  SiJoomla,
  SiDrupal,
  SiGhost,
  SiWix,
  SiWeebly,
  SiBlogger,
  SiMedium,
  SiSubstack,
  SiPatreon,
  SiKickstarter,
  SiIndiegogo,
  SiSourceforge,
  SiStackoverflow,
  SiDevdotto,
  SiHackernews,
} from 'react-icons/si';


const APPS = [
   {  
    name: 'Amazon', 
    playStore:
      'https://play.google.com/store/apps/details?id=com.amazon.mShop.android.shopping',
    website: 'https://www.amazon.com/mobile-apps/b?ie=UTF8&node=2350149011',
    Icon: SiAmazon,
    color: '#FF9900',
  },
  {
    name: 'eBay',
    playStore: 'https://play.google.com/store/apps/details?id=com.ebay.mobile',
    website: 'https://www.ebay.com/m/overview',
    Icon: SiEbay,
    color: '#E53238',
  },
  {
    name: 'AliExpress',
    playStore:
      'https://play.google.com/store/apps/details?id=com.alibaba.aliexpresshd',
    website: 'https://sale.aliexpress.com/__mobile_app.htm',
    Icon: SiAliexpress,
    color: '#FF4747',
  },
  {
    name: 'Etsy',
    playStore: 'https://play.google.com/store/apps/details?id=com.etsy.android',
    website: 'https://www.etsy.com/mobile',
    Icon: SiEtsy,
    color: '#F16521',
  },
  {
    name: 'Walmart',
    playStore: 'https://play.google.com/store/apps/details?id=com.walmart.android',
    website: 'https://www.walmart.com/mobile',
    Icon: SiWalmart,
    color: '#0071CE',
  },
  {
    name: 'Wish',
    playStore: 'https://play.google.com/store/apps/details?id=com.contextlogic.wish',
    website: 'https://wish.com/mobile',
    Icon: SiWish,
    color: '#FF3B3B',
  },
  {
    name: 'Shopify',
    playStore: 'https://play.google.com/store/apps/details?id=com.shopify.shop',
    website: 'https://www.shopify.com/mobile',
    Icon: SiShopify,
    color: '#96BF48',
  },
  {
    name: 'Zalando',
    playStore: 'https://play.google.com/store/apps/details?id=de.zalando.mobile',
    website: 'https://www.zalando.com/mobile',
    Icon: SiZalando,
    color: '#FF6500',
  },
  {
    name: 'Flipkart',
    playStore: 'https://play.google.com/store/apps/details?id=com.flipkart.android',
    website: 'https://www.flipkart.com/mobile-app',
    Icon: SiFlipkart,
    color: '#0046BE',
  },
    {
    name: 'BigCommerce',
    playStore: 'https://play.google.com/store/apps/details?id=com.bigcommerce.mobile',
    website: 'https://www.bigcommerce.com/',
    Icon: SiBigcommerce,
    color: '#00ADEF',
  },
  {
    name: 'Magento',
    playStore: 'https://play.google.com/store/apps/details?id=com.magentocommerce.mobile',
    website: 'https://magento.com/',
    Icon: SiMagento,
    color: '#F46F25',
  },
  {
    name: 'Squarespace',
    playStore: 'https://apps.apple.com/us/app/squarespace-app/id930227565',
    website: 'https://www.squarespace.com/',
    Icon: SiSquarespace,
    color: '#222222',
  },
  {
    name: 'WooCommerce',
    playStore: 'https://woocommerce.com/mobile/',
    website: 'https://woocommerce.com/',
    Icon: SiWoo,
    color: '#96588A',
  },
  {
    name: 'GitLab',
    playStore: 'https://play.google.com/store/apps/details?id=com.gitlab.android',
    website: 'https://gitlab.com/',
    Icon: SiGitlab,
    color: '#FC6D26',
  },
  {
    name: 'Bitbucket',
    playStore: 'https://bitbucket.org/product/mobile',
    website: 'https://bitbucket.org/',
    Icon: SiBitbucket,
    color: '#205081',
  },
  {
    name: 'Jenkins',
    playStore: 'https://www.jenkins.io/',
    website: 'https://www.jenkins.io/',
    Icon: SiJenkins,
    color: '#D33833',
  },
  {
    name: 'Docker',
    playStore: 'https://www.docker.com/products/docker-desktop',
    website: 'https://www.docker.com/',
    Icon: SiDocker,
    color: '#2496ED',
  },
  {
    name: 'Kubernetes',
    playStore: 'https://kubernetes.io/',
    website: 'https://kubernetes.io/',
    Icon: SiKubernetes,
    color: '#326CE5',
  },
  {
    name: 'Heroku',
    playStore: 'https://www.heroku.com/',
    website: 'https://www.heroku.com/',
    Icon: SiHeroku,
    color: '#6762A6',
  },
  {
    name: 'Netlify',
    playStore: 'https://www.netlify.com/',
    website: 'https://www.netlify.com/',
    Icon: SiNetlify,
    color: '#00C7B7',
  },
  {
    name: 'Vercel',
    playStore: 'https://vercel.com/',
    website: 'https://vercel.com/',
    Icon: SiVercel,
    color: '#ffffff',
  },
  {
    name: 'Firebase',
    playStore: 'https://firebase.google.com/',
    website: 'https://firebase.google.com/',
    Icon: SiFirebase,
    color: '#FFCA28',
  },

 
  {
    name: 'Slack',
    playStore: 'https://play.google.com/store/apps/details?id=com.Slack',
    website: 'https://slack.com/',
    Icon: SiSlack,
    color: '#4A154B',
  },
  {
    name: 'Trello',
    playStore: 'https://play.google.com/store/apps/details?id=com.trello',
    website: 'https://trello.com/',
    Icon: SiTrello,
    color: '#0079BF',
  },
  {
    name: 'Asana',
    playStore: 'https://play.google.com/store/apps/details?id=com.asana.app',
    website: 'https://asana.com/',
    Icon: SiAsana,
    color: '#273347',
  },
  {
    name: 'Jira',
    playStore: 'https://play.google.com/store/apps/details?id=com.atlassian.android.jira.core',
    website: 'https://www.atlassian.com/software/jira',
    Icon: SiJira,
    color: '#0052CC',
  },
  {
    name: 'Notion',
    playStore: 'https://www.notion.so/mobile',
    website: 'https://www.notion.so/',
    Icon: SiNotion,
    color: '#ffffff',
  },
  {
    name: 'Postman',
    playStore: 'https://play.google.com/store/apps/details?id=com.postmanlabs.postman',
    website: 'https://www.postman.com/',
    Icon: SiPostman,
    color: '#FF6C37',
  },

  
  {
    name: 'Stripe',
    playStore: 'https://play.google.com/store/apps/details?id=com.stripe.android',
    website: 'https://stripe.com/',
    Icon: SiStripe,
    color: '#6772E5',
  },
  {
    name: 'PayPal',
    playStore: 'https://play.google.com/store/apps/details?id=com.paypal.android.p2pmobile',
    website: 'https://www.paypal.com/',
    Icon: SiPaypal,
    color: '#003087',
  },
  {
    name: 'Square',
    playStore: 'https://play.google.com/store/apps/details?id=com.squareup',
    website: 'https://squareup.com/',
    Icon: SiSquare,
    color: '#2D2D2D',
  },
  {
    name: 'Google Pay',
    playStore: 'https://play.google.com/store/apps/details?id=com.google.android.apps.walletnfcrel',
    website: 'https://pay.google.com/',
    Icon: SiGooglepay,
    color: '#4285F4',
  },

  
  {
    name: 'Shopware',
    playStore: 'https://shopware.com/',
    website: 'https://shopware.com/',
    Icon: SiShopware,
    color: '#FF6D2D',
  },
  {
    name: 'BigBasket',
    playStore: 'https://play.google.com/store/apps/details?id=com.bigbasket.mobileapp',
    website: 'https://www.bigbasket.com/',
    Icon: SiBigbasket,
    color: '#FF6F00',
  },
  {
    name: 'Rakuten',
    playStore: 'https://play.google.com/store/apps/details?id=com.rakuten',
    website: 'https://www.rakuten.com/',
    Icon: SiRakuten,
    color: '#BF0000',
  },
  {
    name: 'Target',
    playStore: 'https://play.google.com/store/apps/details?id=com.target.mobile',
    website: 'https://www.target.com/',
    Icon: SiTarget,
    color: '#CC0000',
  },
  {
    name: 'Allegro',
    playStore: 'https://play.google.com/store/apps/details?id=pl.allegro',
    website: 'https://allegro.pl/',
    Icon: SiAllegro,
    color: '#FF6600',
  },
  {
    name: 'Newegg',
    playStore: 'https://play.google.com/store/apps/details?id=com.newegg.app',
    website: 'https://www.newegg.com/',
    Icon: SiNewegg,
    color: '#FF6600',
  },


  {
    name: 'Envato',
    playStore: 'https://play.google.com/store/apps/details?id=com.envato.market',
    website: 'https://envato.com/',
    Icon: SiEnvato,
    color: '#82B541',
  },
  {
    name: 'Upwork',
    playStore: 'https://play.google.com/store/apps/details?id=com.upwork.android.apps.main',
    website: 'https://www.upwork.com/',
    Icon: SiUpwork,
    color: '#6FDA44',
  },
  {
    name: 'Fiverr',
    playStore: 'https://play.google.com/store/apps/details?id=com.fiverr.fiverr',
    website: 'https://www.fiverr.com/',
    Icon: SiFiverr,
    color: '#1DBF73',
  },


  {
    name: 'Canva',
    playStore: 'https://play.google.com/store/apps/details?id=com.canva.editor',
    website: 'https://www.canva.com/',
    Icon: SiCanva,
    color: '#00C4CC',
  },
  {
    name: 'Adobe',
    playStore: 'https://play.google.com/store/apps/details?id=com.adobe.reader',
    website: 'https://www.adobe.com/',
    Icon: SiAdobe,
    color: '#FF0000',
  },
   {
    name: 'Dropbox',
    playStore: 'https://play.google.com/store/apps/details?id=com.dropbox.android',
    website: 'https://www.dropbox.com/mobile',
    Icon: SiDropbox,
    color: '#0061FF',
  },
  {
    name: 'Telegram',
    playStore: 'https://play.google.com/store/apps/details?id=org.telegram.messenger',
    website: 'https://telegram.org/',
    Icon: SiTelegram,
    color: '#0088CC',
  },
  {
    name: 'WhatsApp',
    playStore: 'https://play.google.com/store/apps/details?id=com.whatsapp',
    website: 'https://www.whatsapp.com/',
    Icon: SiWhatsapp,
    color: '#25D366',
  },
  {
    name: 'Discord',
    playStore: 'https://play.google.com/store/apps/details?id=com.discord',
    website: 'https://discord.com/',
    Icon: SiDiscord,
    color: '#7289DA',
  },
  {
    name: 'Zoom',
    playStore: 'https://play.google.com/store/apps/details?id=us.zoom.videomeetings',
    website: 'https://zoom.us/',
    Icon: SiZoom,
    color: '#2D8CFF',
  },
  {
    name: 'Facebook',
    playStore: 'https://play.google.com/store/apps/details?id=com.facebook.katana',
    website: 'https://www.facebook.com/mobile/',
    Icon: SiFacebook,
    color: '#1877F2',
  },
  {
    name: 'Instagram',
    playStore: 'https://play.google.com/store/apps/details?id=com.instagram.android',
    website: 'https://www.instagram.com/',
    Icon: SiInstagram,
    color: '#E4405F',
  },
  {
    name: 'LinkedIn',
    playStore: 'https://play.google.com/store/apps/details?id=com.linkedin.android',
    website: 'https://www.linkedin.com/',
    Icon: SiLinkedin,
    color: '#0A66C2',
  },
  {
    name: 'Pinterest',
    playStore: 'https://play.google.com/store/apps/details?id=com.pinterest',
    website: 'https://www.pinterest.com/',
    Icon: SiPinterest,
    color: '#BD081C',
  },
  {
    name: 'TikTok',
    playStore: 'https://play.google.com/store/apps/details?id=com.zhiliaoapp.musically',
    website: 'https://www.tiktok.com/',
    Icon: SiTiktok,
    color: '#ffffff',
  },
  {
    name: 'Reddit',
    playStore: 'https://play.google.com/store/apps/details?id=com.reddit.frontpage',
    website: 'https://www.reddit.com/',
    Icon: SiReddit,
    color: '#FF4500',
  },
  {
    name: 'Snapchat',
    playStore: 'https://play.google.com/store/apps/details?id=com.snapchat.android',
    website: 'https://www.snapchat.com/',
    Icon: SiSnapchat,
    color: '#FFFC00',
  },
  {
    name: 'Tumblr',
    playStore: 'https://play.google.com/store/apps/details?id=com.tumblr',
    website: 'https://www.tumblr.com/',
    Icon: SiTumblr,
    color: '#36465D',
  },
  {
    name: 'Vimeo',
    playStore: 'https://play.google.com/store/apps/details?id=com.vimeo.android.videoapp',
    website: 'https://vimeo.com/',
    Icon: SiVimeo,
    color: '#1AB7EA',
  },
  {
    name: 'SoundCloud',
    playStore: 'https://play.google.com/store/apps/details?id=com.soundcloud.android',
    website: 'https://soundcloud.com/',
    Icon: SiSoundcloud,
    color: '#FF5500',
  },
  {
    name: 'Spotify',
    playStore: 'https://play.google.com/store/apps/details?id=com.spotify.music',
    website: 'https://www.spotify.com/',
    Icon: SiSpotify,
    color: '#1DB954',
  },
  {
    name: 'Apple Music',
    playStore: 'https://apps.apple.com/us/app/apple-music/id1108187390',
    website: 'https://music.apple.com/',
    Icon: SiApplemusic,
    color: '#FA233B',
  },
  {
    name: 'Netflix',
    playStore: 'https://play.google.com/store/apps/details?id=com.netflix.mediaclient',
    website: 'https://www.netflix.com/',
    Icon: SiNetflix,
    color: '#E50914',
  },
  {
    name: 'Twitch',
    playStore: 'https://play.google.com/store/apps/details?id=tv.twitch.android.app',
    website: 'https://www.twitch.tv/',
    Icon: SiTwitch,
    color: '#9146FF',
  },

 
{
  name: 'GitHub Actions',
  playStore: 'https://play.google.com/store/apps/details?id=com.github.android', 
  website: 'https://github.com/features/actions',
  Icon: SiGithubactions,
  color: '#2088FF',
},
{
  name: 'CircleCI',
  playStore: 'https://play.google.com/store/apps/details?id=com.circleci.app', 
  website: 'https://circleci.com/',
  Icon: SiCircleci,
  color: '#343434',
},
{
  name: 'Travis CI',
  playStore: 'https://play.google.com/store/apps/details?id=com.travisci.mobile', 
  website: 'https://travis-ci.org/',
  Icon: SiTravisci,
  color: '#3EAAAF',
},
{
  name: 'Bitrise',
  playStore: 'https://play.google.com/store/apps/details?id=io.bitrise.app', // 
  website: 'https://www.bitrise.io/',
  Icon: SiBitrise,
  color: '#FF5A24',
},
{
  name: 'cPanel',
  playStore: 'https://play.google.com/store/apps/details?id=com.cpanel.mobile', 
  website: 'https://cpanel.net/',
  Icon: SiCpanel,
  color: '#FF6C2C',
},
{
  name: 'Apache',
  playStore: 'https://www.apache.org/', 
  website: 'https://httpd.apache.org/',
  Icon: SiApache,
  color: '#D22128',
},
{
  name: 'Nginx',
  playStore: 'https://www.nginx.com/', 
  website: 'https://www.nginx.com/',
  Icon: SiNginx,
  color: '#009639',
},
{
  name: 'MySQL',
  playStore: 'https://play.google.com/store/apps/details?id=com.mysql.mysqlworkbench', 
  website: 'https://www.mysql.com/',
  Icon: SiMysql,
  color: '#4479A1',
},
{
  name: 'PostgreSQL',
  playStore: 'https://play.google.com/store/apps/details?id=me.bluema.postgresqladmin', 
  website: 'https://www.postgresql.org/',
  Icon: SiPostgresql,
  color: '#336791',
},
{
  name: 'MongoDB',
  playStore: 'https://play.google.com/store/apps/details?id=com.mongodb.mobile', 
  website: 'https://www.mongodb.com/',
  Icon: SiMongodb,
  color: '#47A248',
},
{
  name: 'Redis',
  playStore: 'https://play.google.com/store/apps/details?id=com.redis.redisapp', 
  website: 'https://redis.io/',
  Icon: SiRedis,
  color: '#DC382D',
},
{
  name: 'Elasticsearch',
  playStore: 'https://www.elastic.co/', 
  website: 'https://www.elastic.co/elasticsearch/',
  Icon: SiElasticsearch,
  color: '#005571',
},
{
  name: 'Google Cloud',
  playStore: 'https://play.google.com/store/apps/details?id=com.google.android.apps.cloudconsole',
  website: 'https://cloud.google.com/',
  Icon: SiGooglecloud,
  color: '#4285F4',
},
{
  name: 'DigitalOcean',
  playStore: 'https://play.google.com/store/apps/details?id=com.digitalocean.app', 
  website: 'https://www.digitalocean.com/',
  Icon: SiDigitalocean,
  color: '#0080FF',
},
{
  name: 'Terraform',
  playStore: 'https://www.terraform.io/', 
  website: 'https://www.terraform.io/',
  Icon: SiTerraform,
  color: '#623CE4',
},
{
  name: 'Ansible',
  playStore: 'https://www.ansible.com/', 
  website: 'https://www.ansible.com/',
  Icon: SiAnsible,
  color: '#EE0000',
},
{
  name: 'Puppet',
  playStore: 'https://puppet.com/', 
  website: 'https://puppet.com/',
  Icon: SiPuppet,
  color: '#F69220',
},
{
  name: 'Grafana',
  playStore: 'https://play.google.com/store/apps/details?id=com.grafana.mobile', 
  website: 'https://grafana.com/',
  Icon: SiGrafana,
  color: '#F46800',
},
{
  name: 'Prometheus',
  playStore: 'https://prometheus.io/', 
  website: 'https://prometheus.io/',
  Icon: SiPrometheus,
  color: '#E6522C',
},
{
  name: 'Datadog',
  playStore: 'https://play.google.com/store/apps/details?id=com.datadog.android', 
  website: 'https://www.datadoghq.com/',
  Icon: SiDatadog,
  color: '#6F3CF0',
},
{
  name: 'New Relic',
  playStore: 'https://play.google.com/store/apps/details?id=com.newrelic.mobile', 
  website: 'https://newrelic.com/',
  Icon: SiNewrelic,
  color: '#0080FF',
},
{
  name: 'Splunk',
  playStore: 'https://play.google.com/store/apps/details?id=com.splunk.mint',  
  website: 'https://www.splunk.com/',
  Icon: SiSplunk,
  color: '#F68B1F',
},


 
  {
    name: 'Figma',
    playStore: 'https://play.google.com/store/apps/details?id=com.figma.mirror',
    website: 'https://www.figma.com/',
    Icon: SiFigma,
    color: '#F24E1E',
  },
  {
    name: 'Sketch',
    playStore: '',
    website: 'https://www.sketch.com/',
    Icon: SiSketch,
    color: '#F7B500',
  },
  {
    name: 'Adobe Photoshop',
    playStore: '',
    website: 'https://www.adobe.com/products/photoshop.html',
    Icon: SiAdobephotoshop,
    color: '#31A8FF',
  },
  {
    name: 'Adobe Illustrator',
    playStore: '',
    website: 'https://www.adobe.com/products/illustrator.html',
    Icon: SiAdobeillustrator,
    color: '#FF9A00',
  },
  {
    name: 'Adobe After Effects',
    playStore: '',
    website: 'https://www.adobe.com/products/aftereffects.html',
    Icon: SiAdobeaftereffects,
    color: '#9999FF',
  },


  {
    name: 'Google Ads',
    playStore: '',
    website: 'https://ads.google.com/',
    Icon: SiGoogleads,
    color: '#4285F4',
  },
  {
    name: 'Mailchimp',
    playStore: '',
    website: 'https://mailchimp.com/',
    Icon: SiMailchimp,
    color: '#FFE01B',
  },
  {
    name: 'HubSpot',
    playStore: '',
    website: 'https://www.hubspot.com/',
    Icon: SiHubspot,
    color: '#FF7A59',
  },
  {
    name: 'Zendesk',
    playStore: '',
    website: 'https://www.zendesk.com/',
    Icon: SiZendesk,
    color: '#78A300',
  },
  {
    name: 'Salesforce',
    playStore: '',
    website: 'https://www.salesforce.com/',
    Icon: SiSalesforce,
    color: '#00A1E0',
  },


  {
    name: 'Venmo',
    playStore: 'https://play.google.com/store/apps/details?id=com.venmo',
    website: 'https://venmo.com/',
    Icon: SiVenmo,
    color: '#3D95CE',
  },
  {
    name: 'Cash App',
    playStore: 'https://play.google.com/store/apps/details?id=com.squareup.cash',
    website: 'https://cash.app/',
    Icon: SiCashapp,
    color: '#00C244',
  },
  {
    name: 'Monzo',
    playStore: 'https://play.google.com/store/apps/details?id=co.uk.getmondo',
    website: 'https://monzo.com/',
    Icon: SiMonzo,
    color: '#FF3B30',
  },
  {
    name: 'Revolut',
    playStore: 'https://play.google.com/store/apps/details?id=com.revolut.revolut',
    website: 'https://www.revolut.com/',
    Icon: SiRevolut,
    color: '#007AFF',
  },
  {
    name: 'Coinbase',
    playStore: 'https://play.google.com/store/apps/details?id=com.coinbase.android',
    website: 'https://www.coinbase.com/',
    Icon: SiCoinbase,
    color: '#0052FF',
  },
  {
    name: 'Binance',
    playStore: 'https://play.google.com/store/apps/details?id=com.binance.dev',
    website: 'https://www.binance.com/',
    Icon: SiBinance,
    color: '#F3BA2F',
  },
  {
    name: 'Robinhood',
    playStore: 'https://play.google.com/store/apps/details?id=com.robinhood.android',
    website: 'https://robinhood.com/',
    Icon: SiRobinhood,
    color: '#00CA4E',
  },
  {
    name: 'TradingView',
    playStore: '',
    website: 'https://www.tradingview.com/',
    Icon: SiTradingview,
    color: '#00A3EF',
  },
  {
    name: 'Calendly',
    playStore: '',
    website: 'https://calendly.com/',
    Icon: SiCalendly,
    color: '#00A2FF',
  },
];

// Star rating component for apps
function StarRating({ count }) {
  return (
    <div className="flex gap-1" aria-label={`Rating: ${count} out of 5 stars`} role="img">
      {[...Array(5)].map((_, idx) => {
        const active = idx < count;
        return (
          <FiStar
            key={idx}
            className={`text-xs ${active ? 'text-amber-600 fill-amber-600' : 'text-gray-600'}`}
            aria-hidden="true"
          />
        );
      })}
    </div>
  );
}

// AppCard - card for each app in the carousel
function AppCard({ app }) {
  const { name, Icon, color, rating, playStore, website } = app;

  return (
    <article
      tabIndex={0}
      aria-label={`${name} app card`}
      className="relative flex flex-col h-72 sm:h-80 md:h-96 rounded-xl bg-white text-gray-900 shadow-md overflow-hidden group"
    >
      {/* Icon big center */}
      <div
        className="flex justify-center items-center h-[60%] p-6"
        aria-hidden="true"
        style={{ color }}
      >
        <Icon className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 transition-transform duration-300 group-hover:scale-110" />
      </div>

      {/* Bottom details */}
      <section
        aria-live="polite"
        className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-md p-4 rounded-b-xl text-gray-900 z-10 transition"
      >
        <div className="flex justify-between items-center">
          <h3
            title={name}
            className="max-w-[75%] truncate font-semibold text-base sm:text-lg"
          >
            {name}
          </h3>

          <StarRating count={rating} />
        </div>

        <div className="mt-4 flex gap-3">
          <a
            href={playStore}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-1 text-xs font-semibold bg-amber-600 text-black rounded hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-600 transition-colors"
            aria-label={`Download ${name} from Google Play Store`}
          >
            <FiShoppingCart className="w-4 h-4" />
            Play Store
          </a>

          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-1 text-xs font-semibold bg-white text-gray-900 rounded hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors"
            aria-label={`Visit ${name} official website`}
          >
            <FiExternalLink className="w-4 h-4" />
            Website
          </a>
        </div>
      </section>
    </article>
  );
}

export default function FooterDownload() {
  return (
    <section
      aria-label="Download our shopping and tech apps"
      className="relative w-full bg-gradient-to-b from-white to-white px-4 py-12 text-gray-900 my-[-30px] mb-[-100px]"
    >
      <div className="relative mx-auto max-w-[1100px]">
        {/* Navigation buttons */}
        <button
          type="button"
          aria-label="Previous slide"
          className="swiper-button-prev absolute -left-10 top-1/2 z-30 -translate-y-1/2 text-gray-900 opacity-90 hover:opacity-100 focus:outline-none"
          style={{
            width: 32,
            height: 32,
            fontSize: 28,
            lineHeight: 0,
            userSelect: 'none',
            background: 'transparent',
            border: 'none',
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          tabIndex={-1}
        >
          
        </button>

        <button
          type="button"
          aria-label="Next slide"
          className="swiper-button-next absolute -right-10 top-1/2 z-30 -translate-y-1/2 text-gray-900 opacity-90 hover:opacity-100 focus:outline-none"
          style={{
            width: 32,
            height: 32,
            fontSize: 28,
            lineHeight: 0,
            userSelect: 'none',
            background: 'transparent',
            border: 'none',
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          tabIndex={-1}
        >
          
        </button>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          slidesPerGroup={1}
          breakpoints={{
            640: { slidesPerView: 2, slidesPerGroup: 2 },
            768: { slidesPerView: 3, slidesPerGroup: 3 },
            1024: { slidesPerView: 4, slidesPerGroup: 4 },
          }}
          className="!pb-8"
          aria-live="polite"
          aria-atomic="true"
          role="region"
          style={{ overflow: 'hidden' }}
        >
          {APPS.map((app) => (
            <SwiperSlide key={app.id} style={{ width: '100% !important' }}>
              <AppCard app={app} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
