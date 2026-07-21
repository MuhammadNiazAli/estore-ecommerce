"use client";
import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const sampleWatches = [
  {
    id: 1,
    name: "Pro Baseball Bat - Maple Wood",
    category: "Baseball",
    price: 120,
    rating: 5,
    image: "https://media.istockphoto.com/id/160179174/photo/isolated-yellow-tennis-ball-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=7hk4bfHnNUmxfh3oAIDQIccjJGnnP-P-KoGH4MpqZNA=",
  },
  {
    id: 2,
    name: "Elite Baseball Glove - Leather",
    category: "Baseball",
    price: 85,
    rating: 4,
    image: "https://media.istockphoto.com/id/1362497815/photo/baseball-gloves.webp?a=1&b=1&s=612x612&w=0&k=20&c=Y0sHKtehaQi6W4IhGEYgvQEu5dsXEoSJv2BmPnTmEEo=",
  },
  {
    id: 3,
    name: "Baseball Helmet with Faceguard",
    category: "Baseball",
    price: 110,
    rating: 4,
    image: "https://media.istockphoto.com/id/2222435082/photo/black-baseball-helmet-on-light-background-closeup.webp?a=1&b=1&s=612x612&w=0&k=20&c=FITfcmJLRIEjFcinaGU3UhkS2R8YI-B7TvQ6MGwcGZY=",
  },
  {
    id: 4,
    name: "Baseball Catcher’s Chest Protector",
    category: "Baseball",
    price: 95,
    rating: 5,
    image: "https://media.istockphoto.com/id/1401444854/photo/looking-down-on-a-set-of-baseball-catchers-gear-sitting-on-the-turf.webp?a=1&b=1&s=612x612&w=0&k=20&c=_3cU21NXreJgAWTDa2NpsCsIthjGGOpn6va0HIEo8e0=",
  },
  {
    id: 5,
    name: "Premium Baseball Cleats",
    category: "Baseball",
    price: 130,
    rating: 5,
    image: "https://media.istockphoto.com/id/172393118/photo/baseball-getting-ready.webp?a=1&b=1&s=612x612&w=0&k=20&c=U85cqrfliZCVicLl5vEfUgJEjDBZvurvhrD6RPYhSPc=",
  },
  {
    id: 6,
    name: "Baseball Training Net",
    category: "Baseball",
    price: 75,
    rating: 4,
    image: "https://media.istockphoto.com/id/2155193802/photo/softball-on-green-turf-at-a-batting-cage.webp?a=1&b=1&s=612x612&w=0&k=20&c=gmAfV8Rcc0mddfgqYZJJfQUbEWCXKcPgSEzYg-pLgGs=",
  },
  {
    id: 7,
    name: "Youth Baseball Batting Gloves",
    category: "Baseball",
    price: 40,
    rating: 3,
    image: "https://media.istockphoto.com/id/512215395/photo/hand-of-baseball-player-with-pink-glove-and-ball.webp?a=1&b=1&s=612x612&w=0&k=20&c=jUlEuQdQPD2LG4kC5CHUstUL4cmEqnzLmxZnf73D8Ls=",
  },
  {
    id: 8,
    name: "Professional Baseball Ball Set",
    category: "Baseball",
    price: 60,
    rating: 4,
    image: "https://media.istockphoto.com/id/2217790394/photo/baseball-bit-ball-and-leather-glove-realistic-render-set-of-sport-game-equipment-with-brown.webp?a=1&b=1&s=612x612&w=0&k=20&c=D6_rAN9cedNZRH_W2o61tKLNz3aKaIWvnjHVdgl5qiY=",
  },
  {
    id: 9,
    name: "Custom Baseball Jersey",
    category: "Baseball",
    price: 70,
    rating: 5,
    image: "https://media.istockphoto.com/id/2213653785/photo/vintage-baseball-catchers-mask-and-chest-protector.webp?a=1&b=1&s=612x612&w=0&k=20&c=xx0MyYpmf5FF23RJkBPRfgxP-LHfcrUBSXmqsIfCFm0=",
  },
  {
    id: 10,
    name: "Baseball Bat Weight Trainer",
    category: "Baseball",
    price: 35,
    rating: 3,
    image: "https://media.istockphoto.com/id/2205834751/photo/sketch-image-artwork-photo-collage-of-sport-training-effort-black-white-silhouette-sporty.webp?a=1&b=1&s=612x612&w=0&k=20&c=_ZdONMzPxGyFoxwZl3U_ZxtzK6MrCNY4kZCiFFTphNg=",
  },

  // Football (10)
  {
    id: 11,
    name: "Official NFL Football",
    category: "Football",
    price: 90,
    rating: 5,
    image: "https://media.istockphoto.com/id/183297117/photo/nfl-football.webp?a=1&b=1&s=612x612&w=0&k=20&c=HSm5g_C5Joerf2fPpwi77_UKaxPfeZnhFWyAc7YfGLY=",
  },
  {
    id: 12,
    name: "Football Helmet with Visor",
    category: "Football",
    price: 150,
    rating: 5,
    image: "https://media.istockphoto.com/id/2222435157/photo/black-baseball-helmet-on-gray-background-top-view-space-for-text.webp?a=1&b=1&s=612x612&w=0&k=20&c=7nrFsdVk5Vp25t0kQyBjD_X82MkiZKlKYMhvfbDzgNc=",
  },
  {
    id: 13,
    name: "Football Cleats - Lightweight",
    category: "Football",
    price: 120,
    rating: 4,
    image: "https://media.istockphoto.com/id/2222857771/photo/tie-laces-or-football-player-in-locker-room-for-sports-preparation-match-and-waiting-on-game.webp?a=1&b=1&s=612x612&w=0&k=20&c=-XKhVwlw_vKPXOSjk_70peaoe0PRH1xjJ8FIgz4KDhE=",
  },
  {
    id: 14,
    name: "Quarterback Training Target",
    category: "Football",
    price: 50,
    rating: 3,
    image: "https://media.istockphoto.com/id/489600400/photo/american-football-yard-markers.webp?a=1&b=1&s=612x612&w=0&k=20&c=W9yn06aqeN6Tv9_kyxmG_xKNj3Dw3es0N5AMTrGNmns=",
  },
  {
    id: 15,
    name: "Football Practice Cones Set",
    category: "Football",
    price: 30,
    rating: 4,
    image: "https://media.istockphoto.com/id/2192695857/photo/teenage-girls-soccer-team-practicing-skills-in-blue-jerseys.webp?a=1&b=1&s=612x612&w=0&k=20&c=kqfMvdItdW9i7tnCFZgO3RjaAXScKy1OdUtECXnKhqQ=",
  },
  {
    id: 16,
    name: "Wide Receiver Gloves",
    category: "Football",
    price: 45,
    rating: 5,
    image: "https://media.istockphoto.com/id/93155412/photo/throw-a-football.webp?a=1&b=1&s=612x612&w=0&k=20&c=hZqN50bnRiR354FHzej6G8He5zl4kpk9u99BVupudkc=",
  },
  {
    id: 17,
    name: "Football Shoulder Pads",
    category: "Football",
    price: 140,
    rating: 4,
    image: "https://media.istockphoto.com/id/1333958969/photo/american-football-shoulder-pads-with-front-and-back-views-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=MweclgeI1gSqbgBxkHuJzWoUBhm_XpQjQMlBB2kIfP0=",
  },
  {
    id: 18,
    name: "Pro Football Training Dummies",
    category: "Football",
    price: 110,
    rating: 3,
    image: "https://media.istockphoto.com/id/106526667/photo/wooden-doll-with-ball.webp?a=1&b=1&s=612x612&w=0&k=20&c=oBG1MiWnTO3A3q6rT8Zej2Lx24vxQRDsNUTt5mcNrPI=",
  },
  {
    id: 19,
    name: "Football Scoreboard Timer",
    category: "Football",
    price: 200,
    rating: 5,
    image: "https://media.istockphoto.com/id/973497856/photo/digital-marker-of-red-numbers-to-zero.webp?a=1&b=1&s=612x612&w=0&k=20&c=1WXFGwC2M2fp34-sSneSOUXa4kPaW0bMaQuoStX7UwQ=",
  },
  {
    id: 20,
    name: "Football Kicking Tee",
    category: "Football",
    price: 25,
    rating: 4,
    image: "https://media.istockphoto.com/id/466169394/photo/soccer-player-in-action.webp?a=1&b=1&s=612x612&w=0&k=20&c=9fX79zW5KkUI8kkGvfZrtepFc5mag1k0EWVjMpiBEiw=",
  },

  // Basketball (10)
  {
    id: 21,
    name: "Official NBA Basketball",
    category: "Basketball",
    price: 85,
    rating: 5,
    image: "https://images.unsplash.com/photo-1603027605854-e5a47ca5a0d9?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 22,
    name: "Basketball Hoop with Net",
    category: "Basketball",
    price: 250,
    rating: 4,
    image: "https://media.istockphoto.com/id/171305973/photo/basketball-hoop.webp?a=1&b=1&s=612x612&w=0&k=20&c=9T0QkHPX_mojO2LR0Yrs2AM-NlZQ_I4mQPIrbqtvGvQ=",
  },
  {
    id: 23,
    name: "Basketball Shoes - High Top",
    category: "Basketball",
    price: 130,
    rating: 5,
    image: "https://media.istockphoto.com/id/1288167163/photo/yellow-canvas-shoes.webp?a=1&b=1&s=612x612&w=0&k=20&c=2Q80f16OuLWKUYmBMz8qM0muZnRnY3sqBbLWzoxBtas=",
  },
  {
    id: 24,
    name: "Pro Basketball Jersey",
    category: "Basketball",
    price: 80,
    rating: 4,
    image: "https://media.istockphoto.com/id/1140141014/photo/friendship-on-basketball-court.webp?a=1&b=1&s=612x612&w=0&k=20&c=k0tzsJqYe8xQ_gfJJTsBoofDaPjr6-CK8zKTOQblsVE=",
  },
  {
    id: 25,
    name: "Basketball Training Cones",
    category: "Basketball",
    price: 35,
    rating: 3,
    image: "https://media.istockphoto.com/id/2158881779/photo/school-children-taking-break-after-basketball-training-at-school-yard.webp?a=1&b=1&s=612x612&w=0&k=20&c=bywWBP9hY7Cai6gK7Rk4KldE0aTXFfZ-pJqoUYU2eUc=",
  },
  {
    id: 26,
    name: "Portable Basketball Stand",
    category: "Basketball",
    price: 300,
    rating: 5,
    image: "https://media.istockphoto.com/id/2163776642/photo/smiling-man-with-basketball-talking-on-phone-at-outdoor-court.webp?a=1&b=1&s=612x612&w=0&k=20&c=ur2nPiu4zSvw8toqAZ01Qp1t4jpkqlwB1hY6I2Ssj5k=",
  },
  {
    id: 27,
    name: "Basketball Wristbands - Set of 3",
    category: "Basketball",
    price: 20,
    rating: 4,
    image: "https://media.istockphoto.com/id/157638972/photo/basketball-player-ready-for-action.webp?a=1&b=1&s=612x612&w=0&k=20&c=BBCOXlPzGZVZQ3xLiUrMov7lIwrCI_av-rGb_rLXIvE=",
  },
  {
    id: 28,
    name: "Basketball Knee Pads",
    category: "Basketball",
    price: 45,
    rating: 3,
    image: "https://media.istockphoto.com/id/847012984/photo/portrait-of-female-athlete-holding-a-volleyball-in-a-school-gymnasium.webp?a=1&b=1&s=612x612&w=0&k=20&c=GbzwG9UdMhru9OsCqb2ORCL8G1u7-F1bIpjhrSUQve0=",
  },
  {
    id: 29,
    name: "Basketball Shooting Sleeve",
    category: "Basketball",
    price: 25,
    rating: 4,
    image: "https://media.istockphoto.com/id/1487785625/photo/man-playing-basketball-in-a-sports-court.webp?a=1&b=1&s=612x612&w=0&k=20&c=kIU7wwd_l9_S1n58G0b1431cdti0W6wrDDxpLutuSHg=",
  },
  {
    id: 30,
    name: "Basketball Pump and Needle",
    category: "Basketball",
    price: 15,
    rating: 5,
    image: "https://media.istockphoto.com/id/942354808/photo/the-pump-to-inflate-balls-on-a-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=xNOYWL8g4kQGP5KwUliHMI_Kd_N_PHrC5uKC5GFBJfk=",
  },

  // Cricket (10)
  {
    id: 31,
    name: "Cricket Bat - Willow Wood",
    category: "Cricket",
    price: 110,
    rating: 5,
    image: "https://media.istockphoto.com/id/1208661069/photo/cricket-bat-on-green-grass-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=EjvjsTpnPsO0xMJzNtwpdme_1Lu-BDiQ5sOzPEsFabQ=",
  },
  {
    id: 32,
    name: "Cricket Ball Red Leather",
    category: "Cricket",
    price: 25,
    rating: 4,
    image: "https://media.istockphoto.com/id/157181750/photo/new-leather-cricket-ball-against-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=xyfrPI4jrEy-Kth_iwkun_F0M_buw1SZadxLIjfSEUc=",
  },
  {
    id: 33,
    name: "Cricket Pads Set",
    category: "Cricket",
    price: 85,
    rating: 4,
    image: "https://media.istockphoto.com/id/1393792603/photo/batsman-out-and-he-going-to-out-from-ground.webp?a=1&b=1&s=612x612&w=0&k=20&c=YAQ_l4EZP-_dlj0iEtlGjHuHd_8P_D99ZegeVIbrO8A=",
  },
  {
    id: 34,
    name: "Cricket Helmet with Grill",
    category: "Cricket",
    price: 140,
    rating: 5,
    image: "https://media.istockphoto.com/id/1400666695/photo/cricket-helmet-side-view-on-white-color-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=RibNlBV92W8F3H_kJwEazAOhpOsX8k6jK9au1xh0yXM=",
  },
  {
    id: 35,
    name: "Cricket Gloves Pair",
    category: "Cricket",
    price: 65,
    rating: 4,
    image: "https://media.istockphoto.com/id/491945774/photo/close-up-of-cricket-batting-gloves.webp?a=1&b=1&s=612x612&w=0&k=20&c=mYujqUaDgSnTcl82ORsbE8JZSs5WW57zWYhD64yF1-E=",
  },
  {
    id: 36,
    name: "Cricket Wicket Set",
    category: "Cricket",
    price: 120,
    rating: 3,
    image: "https://media.istockphoto.com/id/520467773/photo/ready-to-hit-the-pitch.webp?a=1&b=1&s=612x612&w=0&k=20&c=o1Lvd6yC_NCb0Vvqsmea9s9DknPDs7NdsK2R9OwpTrE=",
  },
  {
    id: 37,
    name: "Cricket Training Cone Markers",
    category: "Cricket",
    price: 35,
    rating: 3,
    image: "https://media.istockphoto.com/id/955737142/photo/cone-markers-on-the-green-grass-playground.webp?a=1&b=1&s=612x612&w=0&k=20&c=lzGdOCEAnsYOtkrzVDO77aD_m43IHwALRhx-NM2AfDw=",
  },
  {
    id: 38,
    name: "Cricket Practice Net",
    category: "Cricket",
    price: 180,
    rating: 5,
    image: "https://media.istockphoto.com/id/114313961/photo/cricket-practice.webp?a=1&b=1&s=612x612&w=0&k=20&c=Xtz-97DyPfF-xeEn01w3oJStRFvDuW56bgW-Gu0LffI=",
  },
  {
    id: 39,
    name: "Cricket Shoes - Lightweight",
    category: "Cricket",
    price: 95,
    rating: 4,
    image: "https://media.istockphoto.com/id/1868643301/photo/a-pair-of-shoes-on-the-grass.webp?a=1&b=1&s=612x612&w=0&k=20&c=nQN0m28WPoRAazU2oKkoR03NuQIGDTcpXn7z1UE4aLk=",
  },
  {
    id: 40,
    name: "Cricket Scorebook",
    category: "Cricket",
    price: 20,
    rating: 4,
    image: "https://media.istockphoto.com/id/144875153/photo/cricket-scorecard-and-ball.webp?a=1&b=1&s=612x612&w=0&k=20&c=yttkIJ6uAmTVCvWT3oMdQ7r_V_YDXI43blhziNp-Gfk=",
  },

  // Tennis (10)
  {
    id: 41,
    name: "Tennis Racket - Pro Series",
    category: "Tennis",
    price: 140,
    rating: 5,
    image: "https://media.istockphoto.com/id/2212185351/photo/tennis-player-taking-selfie-after-winning-match-on-court.webp?a=1&b=1&s=612x612&w=0&k=20&c=r2WFeGtjLl7wfvPnFeSmZk8w6Vb2rQC2g1auzofN7UU=",
  },
  {
    id: 42,
    name: "Tennis Balls - Pack of 3",
    category: "Tennis",
    price: 25,
    rating: 4,
    image: "https://media.istockphoto.com/id/1214618960/photo/pure-greed.webp?a=1&b=1&s=612x612&w=0&k=20&c=hMoEBQSR-y7nGkeTbWk5jsVdU5IYwwiBR5sDLOzwcn0=",
  },
  {
    id: 43,
    name: "Tennis Shoes - Lightweight",
    category: "Tennis",
    price: 110,
    rating: 4,
    image: "https://media.istockphoto.com/id/483834981/photo/lightweight-running-shoes.webp?a=1&b=1&s=612x612&w=0&k=20&c=NJ2T9hJkDms_5X0YHdjdSYw9g0GYLyxYAY1xYkvHwGo=",
  },
  {
    id: 44,
    name: "Tennis String Set",
    category: "Tennis",
    price: 40,
    rating: 3,
    image: "https://media.istockphoto.com/id/1064972966/photo/3d-rendering-a-single-tennis-racquet-lying-with-a-yellow-ball-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=oEK8avayAK_tlgB1BYi3nLBl4yuaIQcpEPktht7wZhE=",
  },
  {
    id: 45,
    name: "Tennis Wristband Set",
    category: "Tennis",
    price: 15,
    rating: 4,
    image: "https://media.istockphoto.com/id/2150105236/photo/hand-holding-a-tennis-racket-hitting-a-ball.webp?a=1&b=1&s=612x612&w=0&k=20&c=U0kBgoxAciUDTG_daoo2gGlWLqgGmpuDL4sI4if6Us4=",
  },
  {
    id: 46,
    name: "Tennis Practice Ball Machine",
    category: "Tennis",
    price: 500,
    rating: 5,
    image: "https://media.istockphoto.com/id/2221664599/photo/tennis-practice-with-tennis-automatic-ball-machine.webp?a=1&b=1&s=612x612&w=0&k=20&c=2RczJfJhkPnPP2BKCRaGg8HrPeQ0Pa9OvKugiVaXPKU=",
  },
  {
    id: 47,
    name: "Tennis Bag - Large Capacity",
    category: "Tennis",
    price: 90,
    rating: 4,
    image: "https://media.istockphoto.com/id/624261660/photo/badminton-bag.webp?a=1&b=1&s=612x612&w=0&k=20&c=A76AzCh7rnjaplEeihph0JaRcKUsGhFMxY13C6bADgk=",
  },
  {
    id: 48,
    name: "Tennis Cap - Breathable",
    category: "Tennis",
    price: 25,
    rating: 4,
    image: "https://media.istockphoto.com/id/1282523317/photo/young-woman-tennis-player-on-an-outdoor-clay-court.webp?a=1&b=1&s=612x612&w=0&k=20&c=fbfOjqSZXC-eC6mVDmhp5fzXE_As9IX6RsiNtTkQloI=",
  },
  {
    id: 49,
    name: "Tennis Elbow Brace",
    category: "Tennis",
    price: 30,
    rating: 3,
    image: "https://media.istockphoto.com/id/537626802/photo/man-wearing-elbow-brace.webp?a=1&b=1&s=612x612&w=0&k=20&c=zgJ1rZsy4CPwtm2CIqMQqrsjKsgjxjBqnqhDDjoLQq0=",
  },
  {
    id: 50,
    name: "Tennis Sunglasses - UV Protection",
    category: "Tennis",
    price: 75,
    rating: 5,
    image: "https://media.istockphoto.com/id/610660352/photo/close-up-of-man-about-to-serve.webp?a=1&b=1&s=612x612&w=0&k=20&c=Vhwrcv_23ym5sPw0iVc3DhhRLbqsyvQrKjQQNcjoaWk=",
  },

  // Bonus (5) - Other Sports Gear
  {
    id: 51,
    name: "Yoga Mat - Eco Friendly",
    category: "Yoga",
    price: 45,
    rating: 5,
    image: "https://media.istockphoto.com/id/1860710155/photo/fitness-instructor-lunging-forward-with-dumb-bells-in-gym.webp?a=1&b=1&s=612x612&w=0&k=20&c=xNUG-g0HIWfTlYzZWDfYtFN1W-R7dza4EdAyWhO27cc=",
  },
  {
    id: 52,
    name: "Swimming Goggles - Anti Fog",
    category: "Swimming",
    price: 35,
    rating: 4,
    image: "https://media.istockphoto.com/id/494255748/photo/swim-glasses.webp?a=1&b=1&s=612x612&w=0&k=20&c=apglZHym5dtg7F32B6OdUwZAx1q6k1Egf_ZvbhLKmgU=",
  },
  {
    id: 53,
    name: "Running Shoes - Marathon Pro",
    category: "Running",
    price: 120,
    rating: 5,
    image: "https://media.istockphoto.com/id/1089844082/photo/close-up-of-sporty-woman-tying-shoelace-while-kneeling-outdoor-in-background-bridge-fitness.webp?a=1&b=1&s=612x612&w=0&k=20&c=I2KzCBa8rFr_r-AfgMOAzGK6RS0_6N-HNT8reDi7sx8=",
  },
  {
    id: 54,
    name: "Cycling Helmet - Lightweight",
    category: "Cycling",
    price: 95,
    rating: 4,
    image: "https://media.istockphoto.com/id/2192506558/photo/bicycle-white-helmet-isolated-on-black-background-concept-of-cycling-safety.webp?a=1&b=1&s=612x612&w=0&k=20&c=UpPBPVQKvrSN9fLpxfijkuKsJE7JeUfApz6aFmBQrO8=",
  },
  {
    id: 55,
    name: "Boxing Gloves - Pro Fight",
    category: "Boxing",
    price: 80,
    rating: 5,
    image: "https://media.istockphoto.com/id/1346093951/photo/shot-of-boxing-gloves-ready-to-be-used.webp?a=1&b=1&s=612x612&w=0&k=20&c=rDceUQjBC-JyGV0moi51y2nGb3ie9HmiLDurnIbhYUU=",
  },
  {
    id: 56,
    name: "Baseball Batting Tee Adjustable",
    category: "Baseball",
    price: 50,
    rating: 4,
    image: "https://media.istockphoto.com/id/503493270/photo/t-ball-stand-with-baseball-hat-glove-and-aluminum-bat.webp?a=1&b=1&s=612x612&w=0&k=20&c=zp9QZeh90rO4W27F3wZwKID7s48Aihv55FMLUaBcm-0=",
  },
  {
    id: 57,
    name: "Baseball Bat Grip Tape",
    category: "Baseball",
    price: 15,
    rating: 3,
    image: "https://media.istockphoto.com/id/532774839/photo/baseball-bat.webp?a=1&b=1&s=612x612&w=0&k=20&c=luVYrVx7LC9Om3h-_KtVDRtb7EjNMT7RYXq0vE9qmQI=",
  },
  {
    id: 58,
    name: "Baseball Practice Ball Set",
    category: "Baseball",
    price: 35,
    rating: 4,
    image: "https://media.istockphoto.com/id/2217631087/photo/sport-ball-pile-on-blue-background-sports-shop-sale-banner-with-soccer-basketball-baseball.webp?a=1&b=1&s=612x612&w=0&k=20&c=qrwd4y6Xd0KWN0c4mvTeFIoJOwZWEjlCgMMCHwpdej4=",
  },
  {
    id: 59,
    name: "Youth Baseball Helmet",
    category: "Baseball",
    price: 85,
    rating: 5,
    image: "https://media.istockphoto.com/id/2189156002/photo/a-white-hat-is-floating-in-the-air.webp?a=1&b=1&s=612x612&w=0&k=20&c=9qba9hqqibz_l99gQ16VXGzEWPkFWnBsZLuGW2GxSFg=",
  },
  {
    id: 60,
    name: "Baseball Glove Conditioner",
    category: "Baseball",
    price: 20,
    rating: 4,
    image: "https://media.istockphoto.com/id/1409008077/photo/applying-leather-conditioner-to-an-old-baseball-glove.webp?a=1&b=1&s=612x612&w=0&k=20&c=YCaS-gTEtS4gCSufqzkURIM7GmsE7roYsoFbCmWV_Dc=",
  },

  // 61 - 65 Football Accessories
  {
    id: 61,
    name: "Football Gloves - Receiver Pro",
    category: "Football",
    price: 60,
    rating: 4,
    image: "https://media.istockphoto.com/id/516364978/photo/the-hands-of-american-football-player-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=IzD-cFtDgp6kw2xEYbzNAPA6toncU4XEczrITvdVgoA=",
  },
  {
    id: 62,
    name: "Football Cleat Replacement Studs",
    category: "Football",
    price: 18,
    rating: 3,
    image: "https://media.istockphoto.com/id/2195877685/photo/soccer.webp?a=1&b=1&s=612x612&w=0&k=20&c=B8zhvujzI9IdIHO0j31OjcJmbZcRQWH-XIBmMyPHEaI=",
  },
  {
    id: 63,
    name: "Football Training Agility Ladder",
    category: "Football",
    price: 30,
    rating: 5,
    image: "https://media.istockphoto.com/id/1219878281/photo/soccer-field-with-training-equipment-and-players-with-coach-in-background-junior-football.webp?a=1&b=1&s=612x612&w=0&k=20&c=brWVyWYO2az5LtmF0Bt3iVKfBCct0Su3FLH-AgwWrNI=",
  },
  {
    id: 64,
    name: "Football Practice Flags",
    category: "Football",
    price: 22,
    rating: 4,
    image: "https://media.istockphoto.com/id/2197643173/photo/young-players-engage-in-flag-football-game-at-an-outdoor-field.webp?a=1&b=1&s=612x612&w=0&k=20&c=o3ag6wzqzYfIxIQ-ZTu8AiAzAMQ_m1iaO8gkkZ1iOWY=",
  },
  {
    id: 65,
    name: "Football Mouthguard Clear",
    category: "Football",
    price: 25,
    rating: 5,
    image: "https://media.istockphoto.com/id/91545757/photo/football-helmet-with-mouthguard.webp?a=1&b=1&s=612x612&w=0&k=20&c=Xmt2kaKffQTS4N5nSAiZJOFzl7ecDjeSC-lwDnIFD-A=",
  },

  // 66 - 70 Basketball Accessories
  {
    id: 66,
    name: "Basketball Rebound Net Trainer",
    category: "Basketball",
    price: 85,
    rating: 4,
    image: "https://media.istockphoto.com/id/2219738595/photo/young-adult-basketball-players-competing-during-a-game.webp?a=1&b=1&s=612x612&w=0&k=20&c=97mPA0CjJ9aQyz2xD_6CT1J9v4dfxcZ4uHmXGrzkofA=",
  },
  {
    id: 67,
    name: "Basketball Hoop Replacement Net",
    category: "Basketball",
    price: 20,
    rating: 4,
    image: "https://media.istockphoto.com/id/146800148/photo/basketball.webp?a=1&b=1&s=612x612&w=0&k=20&c=fwE0jNZqGKukLrpeo4DRFC5ddhPnJB_Wy98055HACUg=",
  },
  {
    id: 68,
    name: "Basketball Shooting Aid",
    category: "Basketball",
    price: 40,
    rating: 3,
    image: "https://media.istockphoto.com/id/2209301547/photo/chat-with-ai-or-artificial-intelligence-young-businessman-chatting-with-a-smart-ai-or.webp?a=1&b=1&s=612x612&w=0&k=20&c=FMnDfnw9jNfSz261siV4NYgjHD8yWHUCVfUX0pMxlns=",
  },
  {
    id: 69,
    name: "Basketball Wrist Support",
    category: "Basketball",
    price: 30,
    rating: 5,
    image: "https://media.istockphoto.com/id/525217710/photo/blank-white-wristband-mockup-on-hand-isolated.webp?a=1&b=1&s=612x612&w=0&k=20&c=xEQsJF9qYFXAPgWFIqprjp-Ovpy_bH-E_5tJatjgx-4=",
  },
  {
    id: 70,
    name: "Basketball Headband Set",
    category: "Basketball",
    price: 18,
    rating: 4,
    image: "https://media.istockphoto.com/id/1770813273/photo/sport-equipment-pink-training-headband-and-wristbands-isolated-on-a-white-background-sport.webp?a=1&b=1&s=612x612&w=0&k=20&c=XDUIOZN54u265dAgemNYeKZZfh-ZX7TIQyVKLXoQs10=",
  },

  // 71 - 75 Cricket Accessories
  {
    id: 71,
    name: "Cricket Bat Grip Replacement",
    category: "Cricket",
    price: 15,
    rating: 4,
    image: "https://media.istockphoto.com/id/1736623091/photo/tennis-racket-handles-worn-from-long-training.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZgVKps5XYMOuaPsVCdeOHZXNFAMV0biKDwMKe8RuInk=",
  },
  {
    id: 72,
    name: "Cricket Ball Basket",
    category: "Cricket",
    price: 55,
    rating: 5,
    image: "https://media.istockphoto.com/id/2165101239/photo/a-basketball-flies-through-the-air-with-the-sky-in-the-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=UsqY3Ouz7rNG_0v_4VhuWIpgPFv5tVh9P9ZpMxWSVVY=",
  },
];


const SportsPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const totalPages = Math.ceil(sampleWatches.length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = sampleWatches.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <section className="w-full bg-white py-10 my-[-50px]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Explore Our Sports
          </h2>
          <p className="text-gray-500 mt-2">
            Browse through our curated collection
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {currentItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                <p className="text-gray-500 text-sm">{item.brand}</p>
                <p className="text-gray-800 font-bold mt-1">${item.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Responsive Pagination */}
        <div className="flex justify-center items-center gap-2 overflow-x-auto scrollbar-hide px-2 py-4 bg-white rounded-lg">
          {/* Previous */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`flex items-center gap-1 px-4 py-2 rounded-lg border min-w-[80px] whitespace-nowrap ${
              currentPage === 1
                ? "bg-gray-200 text-gray-600 cursor-not-allowed"
                : "bg-white text-gray-700 hover:bg-gray-500"
            }`}
          >
            <ChevronLeftIcon className="h-5 w-5" />
            Prev
          </button>

          {/* Page Numbers */}
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 rounded-lg font-medium min-w-[50px] whitespace-nowrap transition ${
                  currentPage === page
                    ? "bg-white text-gray-900 border border-amber-50"
                    : "bg-white text-gray-700 hover:bg-gray-500"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          {/* Next */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`flex items-center gap-1 px-4 py-2 rounded-lg border min-w-[80px] whitespace-nowrap ${
              currentPage === totalPages
                ? "bg-gray-200 text-gray-600 cursor-not-allowed"
                : "bg-white text-gray-700 hover:bg-gray-500"
            }`}
          >
            Next
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SportsPagination;
