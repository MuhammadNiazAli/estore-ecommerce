'use client';

import React, { useState, useEffect, useCallback } from 'react';
import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
} from 'react-icons/fa';

// Base images array
const baseImages = [
  'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvbmVzfGVufDB8fDB8fHww',
  'https://images.unsplash.com/photo-1653629213421-83a13907003f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1656392851225-ec9a304ef9d0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1663408466313-2d4e7edaf172?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1563030646-da027e3d6360?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1682828862897-0d4e1a296ba4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1736995910380-b520deb878df?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMxfHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1630513094315-6fe9a9fdc562?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQzfHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1565263965454-a44e2ede252a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUzfHx8ZW58MHx8fHx8',
  'https://plus.unsplash.com/premium_photo-1722092222965-2885cddcf2c1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDYwfHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1623705593165-0e82bbd6afaa?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDYxfHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1645273092626-cc81ab9581c2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDYzfHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1668064908750-c117aa900d47?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY5fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1622086674486-2536ac3f8bd7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDcwfHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1574005054503-0c1d9ba84af8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDczfHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1634423384351-e9c8da2f30e6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc3fHx8ZW58MHx8fHx8',
  'https://plus.unsplash.com/premium_photo-1718309808041-182e57eea6f7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDg0fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1687262312189-2e3772680403?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDkxfHx8ZW58MHx8fHx8',
  'https://plus.unsplash.com/premium_photo-1684751595229-00b8b47c8de5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDkyfHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1502201563651-826cbb30c3dd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDk1fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1520189123429-6a76abfe7906?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvbmVzfGVufDB8fDB8fHww',
  'https://images.unsplash.com/photo-1621110512561-67011c4f739f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1674139350595-76052f3a88e3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1511499157839-6949873d0df7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1669888940542-bf597f76ef39?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1638464767146-0faa5d6b8db9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1648962493192-b1178f2dac1e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1600055670168-7f95a56be923?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1636633484288-ba18d16271a0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1598605776781-53daef39e863?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1658036676880-4a807ce44940?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1518991043280-1da61d9f3ac5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBob25lc3xlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1628137019644-c3f2fe4ba4ca?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1546213859-859c748e24cb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1546213859-8469ff1a7fb9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1557752593-1999acafa293?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1569183091671-696402586b9c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1569183091618-4d8356108398?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1661143971715-bc954b86344f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1665684640097-4058c1e9602e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
  'https://plus.unsplash.com/premium_photo-1726117315246-619e8e98c2a6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1578321311107-4804d8816b53?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1668003375925-03101d2f2fe6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1609692814857-d0eaed5a148c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1535110362777-608849c19da3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1657615590972-03bf3d423e10?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1648961738320-acab4b2efe5f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1579983093081-bfe2c64cc7b6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1746366812501-53a73dc2e683?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8',
  'https://plus.unsplash.com/premium_photo-1706548332704-aa070a1fe835?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1668003376961-0fa537f97422?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1665406514892-16dccc45aaf8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1647856675623-cf66476b5d50?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1618606106881-effdb4bf8ee6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1618606106881-effdb4bf8ee6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1555375771-14b2a63968a9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI2fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1606308338792-186193fcb2ba?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI3fHx8ZW58MHx8fHx8',
  'https://plus.unsplash.com/premium_photo-1705346738009-52ed3390513a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI4fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1570034711549-beb1f4695b6e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI5fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1611316114443-78793040bc3c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMwfHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1747037139540-20ad4272cc2b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMxfHx8ZW58MHx8fHx8',
  'https://plus.unsplash.com/premium_photo-1661416487382-b551deecc3f7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMyfHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1632488507959-2d7e5b7ba26c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMzfHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1656581274161-b0d4a8a4ccea?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM0fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1695822822491-d92cee704368?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM1fHx8ZW58MHx8fHx8',
  'https://plus.unsplash.com/premium_photo-1743940551276-45887f4d1127?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM2fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1661498126921-bb20025fa1d9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM3fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1668713790671-16bd2102feef?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM5fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1668003398987-250ad48cd5b2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM4fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1668184162994-42a4fb7667b7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQxfHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1588863081231-d08f1d7e16c1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQyfHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1668003378110-409e437b3332?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQzfHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1654864074851-0632e0c168b8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ1fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1592913950823-934c8c4ef82f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ2fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1680687688158-e9165395ff00?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ3fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1603898037225-1bea09c550c0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ5fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1604194868790-e98f6e9c5ed4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUwfHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1726574686436-5ef90358e032?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU0fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1581795648171-e42ceb106d0b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUzfHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1624006931437-f981ccdfc84d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU1fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1604275093239-7ed96f8ee59c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU3fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1596896639823-da416a9d3960?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU4fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1594210430025-236dc6a892b6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU5fHx8ZW58MHx8fHx8',
  'https://plus.unsplash.com/premium_photo-1745167574201-dc119551e9f9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDYwfHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1729748825830-a70892f00731?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDYyfHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1620049185596-1f16f414c448?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDYxfHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1622957041673-7538e268a01d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDYzfHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1689058870898-9b8f237dfef6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY1fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1563549054085-b47fd1b64ce0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY2fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY3fHx8ZW58MHx8fHx8',
  'https://plus.unsplash.com/premium_photo-1726117315284-5d0bfac008b9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY4fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1589921343577-819d2d50525e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDcwfHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1695578130341-d5c389a8b8bb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDcxfHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1510166150654-85d6103a2414?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc1fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1654648662275-dfb19ec8d4a0?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1664883410931-2edffc8be5e6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1656652173534-eedaac432bd1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1741144829752-b2b473b518da?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1609851451108-e937620f1210?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1603015269169-225cb700e29a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1546790852-24d1559726b5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1677171487499-efebd7344499?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1636032204208-fdd9d7b11394?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1718053910317-a369c05c5b50?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1708233002626-ff54f9e41506?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1585540762103-f1ac82014f11?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1583573636253-94ba40113201?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1659243324737-0997a5f5d03c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1611926653670-e18689373857?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8',
  'https://plus.unsplash.com/premium_photo-1743940551486-1ceb906e1538?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI0fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1659084622165-6391a99e5ae8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1634196558948-197697724bb6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI3fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI5fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1610034499386-e70758847b99?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMzfHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1722503585462-708363511555?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM0fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1609921141835-710b7fa6e438?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM3fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1609921141835-710b7fa6e438?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM3fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1598327106026-d9521da673d1?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1598327106026-d9521da673d1?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1561782131-c8aef9b4c0e9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1663373460374-d78ee5369fd5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1590325451637-766d6ac64b64?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1610548822710-dc1d32b47a70?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1693203377278-2e24424f2521?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1597477658461-f41d12750f28?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
  'https://plus.unsplash.com/premium_photo-1661884002007-fea55e211ec7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1697234109712-c072a141e7a4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1490889737678-4bad47eb1a03?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1639685648840-19fb46351afc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1610820270237-e27daaaf0495?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1648961738563-abb93a4a82ee?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1605944697199-84d43c611530?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1600721502738-84bd123c8a99?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D',
  'https://plus.unsplash.com/premium_photo-1706548332704-aa070a1fe835?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1615264952739-555010f3b29b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1628748053737-cd6c46dcb16c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D',
  'https://plus.unsplash.com/premium_photo-1706548331125-1193f17d2650?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1673718424091-5fb734062c05?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1605944696683-d24461966b89?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1600006354211-d929b640cec8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8',
  'https://plus.unsplash.com/premium_photo-1681828148233-37a03ccb2d50?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1570613762858-b7b8f6240090?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1662627488889-3affc6ee6493?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8',
  'https://plus.unsplash.com/premium_photo-1726117315284-5d0bfac008b9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1618558816330-43ae31b50c12?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1628923110721-869d37178072?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1559819774-c4542a473681?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI2fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1629889950243-bd4247db18b0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI3fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1742998253716-27b4cc301e69?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI5fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1591279304068-c997c097f2b7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM0fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1623621723875-8e5fe0eb1346?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM3fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1556983401-336f84d1f80d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM4fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1560677653-a263662b153b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM5fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1650016883397-1225cb4e47b1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQzfHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1679014539437-b925a3f95da3?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1574682592200-948fd815c4f0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1589921343577-819d2d50525e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1747037139540-20ad4272cc2b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1636096032230-db540c5ac68f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D',
];

// Generate phone data only once outside component to avoid re-generation on every render
const generatePhones = () => {
  const phones = [];
  for (let i = 1; i <=200; i++) {
    const randomImage = baseImages[i % baseImages.length];
    const rating = (Math.random() * 4 + 1).toFixed(1);
    const price = (Math.random() * 1000 + 300).toFixed(2);
    phones.push({
      id: i,
      name: `Phone Model ${i}`,
      price: parseFloat(price),
      rating: parseFloat(rating),
      image: randomImage,
      description:
        'Experience unmatched performance with stunning design and powerful features. Built for everyday excellence.',
    });
  }
  return phones;
};

const phonesData = generatePhones();

// StarRating Component
const StarRating = ({ rating }) => {
  const stars = [];
  let rem = rating;
  for (let i = 0; i < 5; i++) {
    if (rem >= 1) {
      stars.push(<FaStar key={i} className="text-amber-600" aria-hidden="true" />);
    } else if (rem >= 0.5) {
      stars.push(<FaStarHalfAlt key={i} className="text-amber-600" aria-hidden="true" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-amber-600" aria-hidden="true" />);
    }
    rem -= 1;
  }
  return <div className="flex space-x-0.5" aria-label={`Rating: ${rating} out of 5 stars`}>{stars}</div>;
};

// Toast Notification Component
const Toast = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 2000);
    return () => clearTimeout(timer);
  }, [onClose]);
  return (
    <div
      role="alert"
      aria-live="assertive"
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-amber-600 text-black px-6 py-3 rounded shadow-lg z-50 font-semibold text-sm select-none"
    >
      {message}
    </div>
  );
};

const PhoneList = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [favorites, setFavorites] = useState(() => {
    // Load favorites from localStorage or initialize empty
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('phoneFavorites');
      return saved ? JSON.parse(saved) : {};
    }
    return {};
  });
  const [toastMessage, setToastMessage] = useState('');
  const [addingToCartId, setAddingToCartId] = useState(null);

  // Save favorites to localStorage on change
  useEffect(() => {
    localStorage.setItem('phoneFavorites', JSON.stringify(favorites));
  }, [favorites]);

  // Toggle favorite logic (only toggle, no price change)
  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const updated = { ...prev, [id]: !prev[id] };
      return updated;
    });
  };

  // Load more products handler
  const handleSeeMore = () => {
    setVisibleCount((prev) => Math.min(prev + 12, phonesData.length));
  };

  // Debounced add to cart to prevent multiple clicks fast
  const handleAddToCart = useCallback(
    (phone) => {
      if (addingToCartId === phone.id) return; // Prevent duplicate click
      setAddingToCartId(phone.id);
      setToastMessage(`Added ${phone.name} to cart!`);
      setTimeout(() => {
        setAddingToCartId(null);
      }, 1500);
    },
    [addingToCartId]
  );

  return (
    <section className="max-w-[1200px] mx-auto px-4 my-12">
      <h2 className="text-3xl font-bold mb-10 text-neutral-50 text-center tracking-tight">
        Explore Premium Phones
      </h2>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        role="list"
        aria-label="List of premium phones"
      >
        {phonesData.slice(0, visibleCount).map((phone) => (
          <article
            key={phone.id}
            className="bg-white group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 relative flex flex-col"
            role="listitem"
            tabIndex={0}
            aria-describedby={`desc-${phone.id}`}
          >
            <div className="relative">
              <img
                src={phone.image}
                alt={phone.name}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                draggable={false}
              />
              <button
                onClick={() => toggleFavorite(phone.id)}
                aria-label={
                  favorites[phone.id]
                    ? `Remove ${phone.name} from favorites`
                    : `Add ${phone.name} to favorites`
                }
                className="absolute top-3 right-3 text-2xl text-red-500 hover:scale-110 transition-transform z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 rounded"
                type="button"
                aria-pressed={favorites[phone.id] ? 'true' : 'false'}
              >
                {favorites[phone.id] ? <FaHeart aria-hidden="true" /> : <FaRegHeart aria-hidden="true" />}
              </button>
            </div>
            <div className="p-5 flex flex-col justify-between flex-grow">
              <div>
                <h3
                  className="font-semibold text-lg text-gray-900 truncate"
                  title={phone.name}
                >
                  {phone.name}
                </h3>
                <p className="text-blue-600 font-bold text-base mt-1">${phone.price.toFixed(2)}</p>
                <div className="flex items-center gap-2 mt-2">
                  <StarRating rating={phone.rating} />
                  <span className="text-gray-500 text-sm">
                    ({phone.rating.toFixed(1)})
                  </span>
                </div>
                <p
                  id={`desc-${phone.id}`}
                  className="text-sm text-gray-700 mt-3 line-clamp-3"
                  title={phone.description}
                >
                  {phone.description}
                </p>
              </div>
              <div className="flex gap-3 mt-5 flex-wrap sm:flex-nowrap">
                <a
                  href={`/product/${phone.id}`}
                  className="flex-1 text-center py-2 bg-gray-100 text-gray-800 rounded-full font-semibold text-sm hover:bg-gray-200 transition"
                >
                  View Details
                </a>
                <button
                  onClick={() => handleAddToCart(phone)}
                  disabled={addingToCartId === phone.id}
                  className={`flex-1 py-2 rounded-full font-semibold text-sm transition
                    ${addingToCartId === phone.id
                      ? 'bg-amber-500 text-black cursor-not-allowed'
                      : 'bg-amber-600 text-black hover:bg-amber-500'}`}
                >
                  {addingToCartId === phone.id ? 'Adding...' : 'Add to Cart'}
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {visibleCount < phonesData.length && (
        <div className="flex justify-center mt-12">
          <button
            onClick={handleSeeMore}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-gray-900 rounded-full font-semibold text-base hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-400"
            type="button"
            aria-label="Load more phones"
          >
            See More Products
          </button>
        </div>
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <Toast
          message={toastMessage}
          onClose={() => setToastMessage('')}
        />
      )}
    </section>
  );
};

export default PhoneList;
