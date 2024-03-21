import React from 'react';
import Image from '../../node_modules/next/image';
import Link from '../../node_modules/next/link';
import Socials from '../components/socialLinks/Socials';
import Navbar from '@/components/navitgation/nav';
import Footer from '@/components/navitgation/footer';
import EventCollection from '@/components/events/EventCollection';

export default async function Home() {
    return (
        <body className='index theme--Warmer overflow-x-hidden'>
            <header className="background--solar">
                <h1 className="u-offscreen">Thelemic Education and Initiation</h1>
                <article>
                    <h2 className="u-offscreen">A Modern Mystery School</h2>
                    <div className="display--lockup">
                        <svg aria-hidden="true" className="brand" data-name="Layer 1" viewBox="0 0 344.88 622.56" xmlns="http://www.w3.org/2000/svg">
                            <path className="cls-1" d="M4.62,310.51c-7.3-185.62,133-280.68,166.53-305.57C206.45,30.86,347.81,143.54,340,309.49c-2,103.44-47.53,216.2-168.85,308.11C56.35,524.71,9.42,432.11,4.62,310.51Z" />
                            <line className="cls-2" x1="205.22" x2="176.6" y1="569.68" y2="198.69" />
                            <path className="cls-3" d="M17.3,307.91c-3.63-164.37,110.34-256.85,154-287,56.2,46.88,161.33,155.58,155.25,288.84C325.06,454.48,227.12,556,171.16,599.25,71.36,514.93,19.74,419,17.3,307.91Z" />
                            <line className="cls-2" x1="131.46" x2="53.34" y1="155.55" y2="149.55" />
                            <line className="cls-2" x1="125.45" x2="44.32" y1="165.17" y2="173.59" />
                            <line className="cls-2" x1="111.03" x2="23.93" y1="189.57" y2="232.01" />
                            <line className="cls-2" x1="114.17" x2="17.27" y1="198.99" y2="276.95" />
                            <line className="cls-2" x1="140.51" x2="24.99" y1="199.57" y2="377.08" />
                            <line className="cls-2" x1="151.9" x2="55.42" y1="199.57" y2="458.05" />
                            <line className="cls-2" x1="166.8" x2="138.64" y1="199.45" y2="569.65" />
                            <path className="cls-4" d="m160.87 564c0.83 2.42 4.59 2.8 4.73 0.93 1.11-15.92 3.36-27.37-0.52-33.47-1.68-2.65-12.52 0.25-13.67 8.3-1.18 8.22 5.83 11 9.1 13.56 0 4.48-0.43 8.4 0.36 10.68z" />
                            <path className="cls-5" d="m161.4 549.05c-0.25 1.09-5.09-2.56-4.94-8.17 0.11-4.19 4.94-6.27 5.51-5.61s-0.3 12.61-0.57 13.78z" />
                            <path className="cls-4" d="M185.61,531.62a13.69,13.69,0,0,0-4.75,1c-2.23,1-4.32,3.24-3.47,5.39,1.21,3.08,3.22,1.19,4.41.46,1.44-.87,2.94-1.73,4.66,0,1.45,1.5.2,3.88-1.75,5.51s-4.16,2.18-4,5.6c.1,1.83.8,4.15,3.31,3.38,2.11-.65,4.18.89,3.66,3.79-1,5.82-5.92,5.86-7.9,1.25-1.39-3.24-7.21-.61-5.59,2.45.72,1.35,2.22,2.4,3.92,4.15a7.58,7.58,0,0,0,5.22,2.09c1.88-.07,4.26,0,7.26-5.1.79-1.35,2.65-5.46,1.66-8.95-1.23-4.32-5.37-3.66-4.75-5.36.54-1.46,4.43-4.15,4.21-8.42S189.37,531.48,185.61,531.62Z" />
                            <line className="cls-2" x1="136.49" x2="74.34" y1="145.93" y2="120.03" />
                            <line className="cls-2" x1="140.92" x2="84.69" y1="137.79" y2="100.79" />
                            <line className="cls-2" x1="149.1" x2="105.41" y1="125.34" y2="80.82" />
                            <line className="cls-2" x1="153.51" x2="123.91" y1="116.34" y2="59.36" />
                            <line className="cls-2" x1="165.34" x2="157.2" y1="97.1" y2="31.99" />
                            <line className="cls-2" x1="176.75" x2="184.58" y1="97.1" y2="31.24" />
                            <polygon className="cls-2" points="171.26 87.86 105.76 198.51 236.65 198.47" />
                            <path className="cls-6" d="M191.21,156c-1.64-4.19-11.55-8.82-16.34-8-7.84,1.28-22.21,8.36-24.83,10.61s.48,3.56,1.66,3.67c5,.43,11.19,3.45,19.53,4.6,1.29.18.74,1.87.78,2.66s-1.89,3.33-4,5.46c-3.73,3.77-10.09,9.59-11.39,9.59s.74-2.87-1.77-3.64c-1.4-.43-2.64-.71-2.64,3.8,0,5,5.23,2.37,5.91,2,4.51-2.73,13.59-11.39,14.07-10.81s.51,10.81.51,10.81,1.63,2.78,1.91.08c.34-3.42,4.65-2.35,5.14-5.21.43-2.56-3.43-2-3.38-3.48.43-12.11,1.35-5.56,2-9.76.33-2.27-.54-1.7,3.38-3.3a11.43,11.43,0,0,0,5.89-4.51C188.92,158.92,191.21,156,191.21,156Z" />
                            <polygon className="cls-7" points="171.33 102.58 118.77 191.36 223.79 191.33" />
                            <path className="cls-5" d="m165.44 154.64a8.84 8.84 0 0 0 0.32 4.49 9.66 9.66 0 0 0 3.21 4.66s-12-2.24-13.5-2.89 5.63-4.02 9.97-6.26z" />
                            <path className="cls-5" d="m180.54 153.83a17.08 17.08 0 0 1-0.48 4.34 54.15 54.15 0 0 1-2.26 5.14c0 0.48 3.8-1.54 5.14-2.25 2.41-1.29 5.63-3.85 2.09-5.46-1.18-0.54-4.49-1.77-4.49-1.77z" />
                            <path className="cls-4" d="M187.75,139.7a69.63,69.63,0,0,0-10.28-.26c-5.79.26-7.11,1.05-12.64,3.42a29.61,29.61,0,0,1-11.6,2.64c-1.85,0-1.57-2.64,1.05-3.95s8.44-.27,9.76-2.38a9.82,9.82,0,0,1,7.64-5c3.95-.26,10.8.27,12.38.79S188,138.12,187.75,139.7Z" />
                            <line className="cls-2" x1="296.12" x2="190.62" y1="441.61" y2="198.68" />
                            <line className="cls-2" x1="318.56" x2="202.36" y1="376.17" y2="198.68" />
                            <line className="cls-2" x1="227.21" x2="326.21" y1="198.73" y2="276.97" />
                            <line className="cls-2" x1="216.69" x2="294.18" y1="164.79" y2="173.06" />
                            <line className="cls-2" x1="230.56" x2="318.38" y1="188.7" y2="229.64" />
                            <line className="cls-2" x1="211.91" x2="279.82" y1="156.18" y2="145.65" />
                            <line className="cls-2" x1="205.21" x2="264.04" y1="145.65" y2="119.83" />
                            <path className="cls-8" d="m136.59 448.18c1.26 6.29 5.18 10.68 7.54 10.21s4.07-1.73 3.91-5-5-21.49-5-21.49l-8.79-4.24s1.75 17.39 2.34 20.52z" />
                            <path className="cls-8" d="M38.81,318.58c-5,.51-12.51,1.51-8,9,2,3.34,18,9,21.51,10.5s10,5,10,5l1-9.51Z" />
                            <path className="cls-8" d="M37.3,332.6c-5,1.5-8.09,6-6.78,9.1,1.08,2.58,2.78,4.91,7.79,5.91s8.5-1,15.51-.5a106.37,106.37,0,0,1,12,1.5l-4-10Z" />
                            <path className="cls-8" d="M35.8,348.93c-4.79.31-9.3,4.33-4.79,7.84s7.3,2.68,15.3,1.68,14.51-2,14.51-2l5-2-4-8.51Z" />
                            <path className="cls-8" d="m34.93 316.82s8.9 4.34 12.39 6.37c4.24 2.48 7.42 4.6 10.61 8.14s2.83 6.73 5.3 7.44-2.47-15.58-3.53-17.7-8.14-11-12.38-11.68-12-3.57-14.16-1.77c-3.9 3.18-0.36 8.5 1.77 9.2z" />
                            <path className="cls-8" d="M38.14,302.29A11.17,11.17,0,0,1,34.87,296c-.7-3.9,3.89-2.83,7.79-2.48s14.15,13.45,18,16.63,3.54,15.93,2.49,14.15-7.09-7.42-7.09-7.42S41,304.44,38.14,302.29Z" />
                            <path className="cls-8" d="M64.44,305.2S46.74,279.37,43.2,279s-.71,11.68,3.19,16.27,15.22,15.94,15.22,15.94l7.79,8.84Z" />
                            <path className="cls-8" d="m53 264.53c1.77-2.47 7.79 2.12 8.5 5.67s2.5 30.8 2.82 32.56-10.16-10.23-10.61-14.16c-1.06-9.21-2.8-21.13-0.71-24.07z" />
                            <path className="cls-8" d="M73.5,320,71,254.54a9.6,9.6,0,0,0-8.14,9.91c0,1.13-.06,3.3-.16,6-.37,10.14-1.25,27.95-1.25,27.95l9.91,26.18Z" />
                            <path className="cls-8" d="M61,356.12s-22.28,2-24.09,2.78-5.08,4.09-4.75,6.23,2.51,5.1,7.38,4.74c4.42-.32,12.44-3.6,15.23-4.42s8.84-2,8.84-2Z" />
                            <path className="cls-8" d="m60.33 363.49s-16.87 5.73-19.17 8.35-5.24 4.09-6.22 8.19c-1.09 4.53 2.79 6.56 4.26 6.39s4.8-2.42 6.22-2.79 5.9-3.93 8.51-5.24 11.32-7.86 11.32-7.86z" />
                            <path className="cls-8" d="M72.09,392.65S52.69,407.9,49.68,409s-10.54-.38-7.91-6.78S52.88,391.9,52.88,391.9l12.05-8.48,3.2-.75Z" />
                            <path className="cls-8" d="M65.41,372l2.72,9.16s-22.38,16.89-23.72,17.52c-2.45,1.12-5.64.57-6.68-1.45-1.79-3.45,2-10.49,3.92-11.8s20.48-12.44,22-13.26S65.41,372,65.41,372Z" />
                            <path className="cls-8" d="m78.49 400.93s-20.14 17.14-23.16 19-6.21 1.69-6.78-1.5 1-8.11 2.45-9.8 23.35-17.51 23.35-17.51z" />
                            <path className="cls-8" d="M85.83,406.39s-21.65,22.93-24.1,23.35c-4.33.76-6.4-2.45-6.21-5.08s3.39-6.4,4.14-8.1,20.15-17.14,20.15-17.14Z" />
                            <path className="cls-8" d="M92.81,412.79S71,439.72,68.7,440.66s-7.16.95-6.4-4.88S87,404.88,87,404.88l5.65,7.35" />
                            <path className="cls-8" d="M100.15,417.5s-17.52,29.91-20.34,31.83c-4.71,3.19-10.36-.38-9-8.47.68-4.18,23.35-29.76,23.35-29.76Z" />
                            <path className="cls-8" d="m132.72 461c4.65 2 8.29-0.19 7.54-3.38s-3.39-9.05-4-12.62-1.88-11.49-1.88-11.49l-2.03-4.51-5.65 4.13s0 25.23 6.02 27.87z" />
                            <path className="cls-9" d="M106.07,443.3s.14,12.14,1,15.06,7,10.41,9.35,4.71c1.21-3,1.21-24.1,2.24-18.26.14.79-1.89,13.38,2.2,17.71,2.14,2.24,6.73,5.55,8-1.14,1.56-8.1-.86-26.74-.86-26.74l-2.6-7.34-14.18,3Z" />
                            <path className="cls-8" d="M85.46,443.49s-2.83,5.84-2.07,8.09c.63,1.91,3.76,3.39,6.4,2.27s9.6-20,9.79-18.07-7.45,16.07-2.45,21.27c9.61,10,14.88-21.47,15.25-24.67s-8.65-13-8.65-13l-3.58-1.89Z" />
                            <path className="cls-8" d="M102.85,398.44,85.72,374.89l-6.9-29.67-6.47-20.47S66.5,307,61.9,309.91c-1.95,1.24-1.25,4.81-.42,9s.42,7.53,1.25,7.95,6.69,6.68,6.69,6.68-6.79-6.36-9-5.85c-3.55.83-2.72,5.23-1.26,7.74s6.69,5.42,7.73,6.06-9.39-2.49-9.81.2c-.84,5.23,3.13,8.36,13.37,9.82s-11.29-2.09-13,2.3c-1.49,3.93,5,4.81,4.18,6.48s-7.1,5.22-2.3,8.77c2.53,1.87,5.22-.63,5.43,1s-5.22,9,.63,11.28c3.7,1.46-2.3,4.81,2.51,7.52,2.6,1.47-.42,1.88,1.46,5.44s6.27-.21,6.48,2.08c.1,1.08-.42,5.12.63,6.48,1.18,1.54,4.63-.46,5.84.21-1.46,4.39,2.51,11.08,9.61,7.94-.83,3.55,0,13.37,7.53,8.35,4.29-2.86.6,4.12,2.09,7.11,1.25,2.5,3.13,2.72,8.35.84,1.32-.48.63,4.8,4.39,6.48,1.87.82,3.89.17,5-2.51,1-2.51,2.77-7.76,3.13-7.94s.21,2.71,1.46,8.14c.8,3.47,7.62,7.64,8.78,1.68,1.25-6.48,4.6,5.22,8.36,1.46s4.18-20.06,4.18-20.06Z" />
                            <path className="cls-8" d="m96 389.1s-11.71 12.33-13.79 14.42" />
                            <line className="cls-8" x1="101.81" x2="91.78" y1="396.62" y2="412.5" />
                            <line className="cls-8" x1="117.26" x2="110.58" y1="404.77" y2="427.96" />
                            <line className="cls-8" x1="126.05" x2="122.49" y1="408.33" y2="423.99" />
                            <line className="cls-8" x1="133.36" x2="132.73" y1="431.1" y2="419.39" />
                            <path className="cls-10" d="m130.43 410s0.42 4.59 1.46 4.59 1.68-1.88 1.68-3.76-3.14-0.83-3.14-0.83z" />
                            <path className="cls-11" d="M78.82,364.87c-2.92.83-7.72.42-8.15,1.66s1.68,1.47,4.39,1.05,3.34-1.05,6.27-1.46,1.77-4.45,1.77-4.45l-.51,9.68a7.4,7.4,0,0,0-2.51,2.08c-1.46,1.67-4,3.34-1,4.18s5.22,0,5.85,1.46-9.61,5-8.35,6.68,8.35-5.43,10-5.43,4.6-.2,2.72,3.35-7.1,7.94-4.6,7.52,4.81-3.13,6.06-4.59-1.67-11.92-1.67-11.92l-7.43-11.86S81.75,364,78.82,364.87Z" />
                            <path className="cls-10" d="m71.34 360.07c0 0.52-0.89 0.95-2 0.95s-2-0.43-2-0.95 0.89-0.94 2-0.94 2 0.43 2 0.94z" />
                            <path className="cls-10" d="M81.9,393.55c.14.25-.26.75-.89,1.1s-1.26.45-1.41.2.26-.74.89-1.1S81.76,393.3,81.9,393.55Z" />
                            <path className="cls-10" d="m106.4 403.93s-3.34 9-2.72 9.61 1-2.09 3.35-5.64 2.3-5 2.3-5l-4-2.93z" />
                            <path className="cls-8" d="M152.41,394s-8.13-1-11.32-1.41a71.55,71.55,0,0,1-10.26-2.47c-2.48-.72-1.77-1.06-8.49-3.9s-5.32-6-9.21-8.14-8.13-9.2-11.32-12-14.51-15.57-17-19.46-3.18-12.38-6.36-18.05-5-9.2-5-9.2-2.12,3.18,0,9.91,7.08,16.28,6.37,20.52a25.52,25.52,0,0,0,1.42,12c1.06,2.83,1.06,9.91,3.18,12.38s6,1.78,6,5.32,1.41,9.55,4.24,11.68,1.77,3.54,6,5.66,4.25,3.54,6.72,6,3.19,2.13,9.2,2.84,6.73,1.77,11.68,3.54A66.55,66.55,0,0,0,139.68,412c3.53.7,10.25,2.48,10.25,2.48Z" />
                            <path className="cls-10" d="m75.21 377.65c0.1 0.27-1.09 0.94-2.66 1.5s-2.91 0.81-3 0.53 1.09-0.94 2.66-1.5 2.9-0.8 3-0.53z" />
                            <path className="cls-11" d="m150.71 401.11s-6.28-0.94-8.79-0.63-4.54 1.41-3 2 1.87 1.57 2.35 3 2.19 3.61-0.31 4.08-3.61 0.79-7.38-1.25-10.2-11.93-11-10.52 5.33 5.34 6 7.69 14 7.69 14 7.69l0.47-5.33s9.7-3.75 7.66-6.73z" />
                            <path className="cls-11" d="M102.38,371.13a5.1,5.1,0,0,0-.16,4.08c.94,1.89,2.67.47,3.14,1.89s.62,2.51,1.42,4.55,2.81-.63,2.19-3-4.71-8.48-4.71-8.48Z" />
                            <path className="cls-11" d="m96.1 379.3s1 0.62 1.73 1.25 1.72 4.55 1.88 6.12 3.77 2.82 4.08 4.08-0.47 3 3.45 2 5.81-2.52 3.3-2.35-6.59-0.48-8-2.51-0.15-4.4-1.56-6.28-5.19-4.05-4.88-2.31z" />
                            <path className="cls-11" d="m117.92 398.9c0.84-2.52-0.64 0.33-2.83-2.19s-3.45-3.14-3.14-1.73 1.1 4.71 2.51 4.4 3.3 0 3.46-0.48z" />
                            <path className="cls-11" d="M112.89,379.61s-.15.31.63,1.25,2.83,3,2.67,4.71-.78,3.45.63,4.09.78,2.81,2.67,2.81.62-2.2.78-3.76,1.25-1.73,2.51-1.57,3.77,1.41,4.4,2.52,2,1.56,2.51,3.75,1.41,7.38,2.82,6.13.63-4.4.78-6,2.67-2.66,3.46-.78-1.25,3.93,2.51,3.77a82.59,82.59,0,0,0,8.47-.95l1.89-2.2s-10.36-.15-17.27-3-13.5-5.49-13.5-5.49l-4.23-5.5Z" />
                            <path className="cls-11" d="m98 370c0 1.31-0.45 2.36-1 2.36s-1-1.05-1-2.36 0.45-2.35 1-2.35 1 1.09 1 2.35z" />
                            <path className="cls-11" d="M102.69,367.53s-.47,2.35-1.72.46.31-3.29-2-3.6-3.14.78-4.87,2-.31-1.41-1.25-2.67-3-2.35-3-3-1.72-3.14,0-1.73,3.46,3.61,3.77,1.57-1.25-4.24-1.25-4.24l-2.52-2.51s.32,1.89-1.41,1.89-.16-2.52-2-4.09-2.51,1.26-3.76-.15,1.25-3.77.78-5.65S91.71,355,91.71,355l7.53,8Z" />
                            <path className="cls-11" d="M91.71,381.33a63.57,63.57,0,0,0,.31-7.06c-.15-2-.63-4.71-1.41-4.86s-1.1-.16-1.57,1.09a1.19,1.19,0,0,1-1.72.63,5.36,5.36,0,0,0-.64-4.08c-1.25-1.73-1.87-3.45-2.19-2s3.45,10.52,3.45,10.52Z" />
                            <path className="cls-8" d="m207.49 448.12c-1.27 6.27-5.19 10.67-7.54 10.2s-4.08-1.73-3.93-5 5-21.5 5-21.5l8.79-4.23s-1.7 17.41-2.32 20.53z" />
                            <path className="cls-8" d="M305.27,318.51c5,.51,12.51,1.51,8,9-2,3.35-18,9-21.51,10.5s-10,5-10,5l-1-9.51Z" />
                            <path className="cls-8" d="M306.77,332.53c5,1.5,8.09,6,6.79,9.1-1.09,2.58-2.78,4.91-7.8,5.91s-8.5-1-15.5-.5a108,108,0,0,0-12,1.49l4-10Z" />
                            <path className="cls-8" d="M308.27,348.87c4.8.3,9.3,4.33,4.8,7.83s-7.31,2.68-15.31,1.68-14.51-2-14.51-2l-5-2,4-8.5Z" />
                            <path className="cls-8" d="m309.14 316.75s-8.9 4.34-12.38 6.37c-4.25 2.48-7.43 4.6-10.62 8.14s-2.83 6.72-5.3 7.44 2.47-15.57 3.53-17.7 8.14-11 12.39-11.68 11.95-3.58 14.16-1.77c3.88 3.19 0.35 8.45-1.78 9.2z" />
                            <path className="cls-8" d="m305.93 302.22a11.1 11.1 0 0 0 3.27-6.29c0.71-3.89-3.9-2.83-7.78-2.48s-14.16 13.45-18.05 16.63-3.54 15.92-2.49 14.15 7.08-7.42 7.08-7.42 15.13-12.45 17.97-14.59z" />
                            <path className="cls-8" d="M279.64,305.13s17.69-25.84,21.23-26.19.7,11.67-3.18,16.28-15.23,15.92-15.23,15.92L274.68,320Z" />
                            <path className="cls-8" d="m291.07 264.46c-1.77-2.48-7.78 2.13-8.49 5.67s-2.48 30.78-2.84 32.56 10.17-10.24 10.63-14.16c1.05-9.21 2.8-21.13 0.7-24.07z" />
                            <path className="cls-8" d="M270.58,319.94l2.47-65.47a9.6,9.6,0,0,1,8.14,9.91c0,1.13.07,3.3.16,6,.37,10.15,1.26,28,1.26,28l-9.91,26.19Z" />
                            <path className="cls-8" d="M283.09,356.05s22.27,2,24.08,2.78,5.08,4.1,4.75,6.23-2.5,5.1-7.37,4.74c-4.43-.32-12.45-3.6-15.23-4.42s-8.85-2-8.85-2Z" />
                            <path className="cls-8" d="m283.74 363.42s16.87 5.73 19.17 8.35 5.24 4.09 6.22 8.19c1.09 4.53-2.79 6.55-4.26 6.39s-4.74-2.46-6.22-2.79-5.9-3.93-8.52-5.24-11.29-7.86-11.29-7.86z" />
                            <path className="cls-8" d="M272,392.58s19.4,15.25,22.41,16.38,10.55-.38,7.91-6.78-11.12-10.36-11.12-10.36l-12-8.47-3.2-.75Z" />
                            <path className="cls-8" d="m278.66 371.94-2.72 9.15s22.38 16.89 23.72 17.52c2.45 1.12 5.64 0.57 6.68-1.45 1.79-3.46-2-10.49-3.92-11.79s-20.48-12.45-21.95-13.27-1.81-0.16-1.81-0.16z" />
                            <path className="cls-8" d="M265.58,400.86s20.15,17.14,23.16,19,6.21,1.69,6.78-1.5-.94-8.11-2.45-9.8-23.35-17.51-23.35-17.51Z" />
                            <path className="cls-8" d="M258.24,406.32s21.66,22.92,24.09,23.35c4.34.76,6.41-2.45,6.22-5.08s-3.38-6.4-4.14-8.1-20.14-17.14-20.14-17.14Z" />
                            <path className="cls-8" d="M251.27,412.72s21.84,26.94,24.1,27.88,7.15.93,6.41-4.9-24.67-30.89-24.67-30.89l-5.65,7.35" />
                            <path className="cls-8" d="M243.92,417.43s17.52,29.9,20.35,31.82c4.7,3.2,10.35-.37,9-8.47C272.62,436.61,250,411,250,411Z" />
                            <path className="cls-8" d="m211.35 460.93c-4.65 2-8.29-0.19-7.53-3.39s3.38-9 4-12.61 1.89-11.49 1.89-11.49l2.07-4.52 5.64 4.14s-0.05 25.23-6.07 27.87z" />
                            <path className="cls-9" d="M238,443.23s-.14,12.13-1.05,15.06-7,10.4-9.33,4.71c-1.21-3-1.21-24.1-2.25-18.26-.14.79,1.9,13.38-2.2,17.71-2.13,2.24-6.72,5.55-8-1.14-1.56-8.1.86-26.74.86-26.74l2.59-7.35,14.2,3Z" />
                            <path className="cls-8" d="M258.61,443.42s2.83,5.83,2.07,8.1c-.63,1.89-3.76,3.39-6.4,2.26s-9.6-20-9.78-18.08,7.44,16.08,2.44,21.28c-9.6,10-14.88-21.47-15.25-24.67s8.65-13,8.65-13l3.58-1.89Z" />
                            <path className="cls-8" d="M241.23,398.37l17.13-23.55,6.89-29.67,6.48-20.48s5.85-17.75,10.44-14.83c1.95,1.24,1.25,4.81.43,9s-.43,7.52-1.27,7.94-6.68,6.68-6.68,6.68,6.79-6.37,9-5.84c3.55.83,2.73,5.22,1.25,7.72s-6.68,5.43-7.72,6.06,9.39-2.48,9.82.21c.84,5.23-3.13,8.36-13.38,9.82s11.28-2.09,13,2.3c1.5,3.92-5,4.8-4.18,6.48s7.11,5.22,2.3,8.77c-2.53,1.86-5.22-.62-5.43,1s5.22,9-.63,11.28c-3.7,1.45,2.3,4.81-2.51,7.52-2.6,1.47.42,1.88-1.46,5.43s-6.27-.21-6.48,2.09c-.09,1.08.42,5.12-.62,6.48-1.18,1.54-4.63-.46-5.86.2,1.46,4.4-2.5,11.08-9.6,8,.83,3.55,0,13.37-7.53,8.36-4.29-2.87-.59,4.11-2.08,7.1-1.26,2.51-3.14,2.71-8.36.84-1.31-.47-.63,4.8-4.39,6.47-1.86.84-3.9.18-5-2.51-1.05-2.5-2.78-7.75-3.14-7.94s-.21,2.72-1.46,8.15c-.8,3.47-7.62,7.63-8.78,1.68-1.25-6.48-4.59,5.22-8.35,1.46s-4.19-20.06-4.19-20.06Z" />
                            <path className="cls-8" d="m248.11 389s11.71 12.33 13.8 14.41" />
                            <line className="cls-8" x1="242.27" x2="252.3" y1="396.55" y2="412.43" />
                            <line className="cls-8" x1="226.81" x2="233.49" y1="404.7" y2="427.89" />
                            <line className="cls-8" x1="218.03" x2="221.58" y1="408.25" y2="423.92" />
                            <line className="cls-8" x1="210.72" x2="211.34" y1="431.02" y2="419.33" />
                            <path className="cls-10" d="m213.64 409.93s-0.41 4.59-1.46 4.59-1.67-1.88-1.67-3.76 3.13-0.83 3.13-0.83z" />
                            <path className="cls-11" d="m265.25 364.79c2.92 0.84 7.73 0.42 8.15 1.67s-1.67 1.47-4.39 1-3.34-1-6.27-1.46-1.74-4.4-1.74-4.4l0.52 9.67a7.76 7.76 0 0 1 2.5 2.09c1.47 1.67 4 3.34 1.05 4.18s-5.22 0-5.85 1.46 9.61 5 8.36 6.68-8.36-5.43-10-5.43-4.6-0.21-2.72 3.35 7.11 7.93 4.59 7.52-4.8-3.14-6-4.6 1.55-11.91 1.55-11.91l7.44-11.87s-0.11 1.26 2.81 2.05z" />
                            <path className="cls-10" d="m272.73 360c0 0.52 0.89 0.94 2 0.94s2-0.42 2-0.94-0.88-0.94-2-0.94-2 0.42-2 0.94z" />
                            <path className="cls-10" d="M268.86,377.58c-.09.27,1.1.94,2.66,1.5s2.92.8,3,.53-1.1-.94-2.67-1.5S269,377.31,268.86,377.58Z" />
                            <path className="cls-8" d="m237.67 403.87s3.35 9 2.72 9.61-1-2.09-3.35-5.65-2.3-5-2.3-5l4-2.93z" />
                            <path className="cls-10" d="M262.17,393.48c-.14.24.26.75.9,1.1s1.25.44,1.39.2-.25-.74-.88-1.11S262.31,393.23,262.17,393.48Z" />
                            <path className="cls-8" d="M191.66,393.9s8.14-1.06,11.32-1.42A70.2,70.2,0,0,0,213.24,390c2.48-.71,1.78-1.06,8.5-3.89s5.31-6,9.2-8.14,8.14-9.2,11.32-12,14.51-15.57,17-19.46,3.18-12.38,6.37-18.05,5-9.2,5-9.2,2.12,3.19,0,9.91-7.09,16.28-6.38,20.52a25.84,25.84,0,0,1-1.41,12c-1.06,2.83-1.06,9.91-3.19,12.38s-6,1.76-6,5.31-1.42,9.55-4.25,11.67-1.77,3.54-6,5.67-4.25,3.54-6.73,6-3.19,2.11-9.2,2.82-6.73,1.78-11.68,3.54A65.91,65.91,0,0,1,204.4,412c-3.55.7-10.26,2.47-10.26,2.47Z" />
                            <path className="cls-11" d="M193.36,401s6.28-.94,8.79-.63,4.54,1.41,3,2-1.88,1.57-2.35,3-2.2,3.61.3,4.08,3.61.79,7.38-1.26,10.2-11.92,11-10.5-5.34,5.32-6,7.68-14,7.69-14,7.69l-.47-5.33S191.32,404,193.36,401Z" />
                            <path className="cls-11" d="M241.69,371.06a5.1,5.1,0,0,1,.16,4.08c-.94,1.89-2.67.47-3.14,1.89s-.63,2.5-1.41,4.55-2.82-.64-2.2-3,4.71-8.48,4.71-8.48Z" />
                            <path className="cls-11" d="M248,379.22s-.94.63-1.72,1.26-1.73,4.55-1.88,6.12-3.78,2.82-4.09,4.08.47,3-3.46,2-5.8-2.51-3.29-2.35,6.6-.47,8-2.52.16-4.39,1.57-6.27S248.29,377.5,248,379.22Z" />
                            <path className="cls-11" d="m226.16 398.84c-0.85-2.53 0.63 0.31 2.82-2.2s3.45-3.13 3.14-1.72-1.1 4.7-2.51 4.39-3.29 0-3.45-0.47z" />
                            <path className="cls-4" d="M231.18,379.53s.15.32-.63,1.26-2.83,3-2.66,4.71.78,3.46-.63,4.08-.79,2.83-2.67,2.83-.63-2.2-.79-3.77-1.25-1.73-2.51-1.57-3.77,1.41-4.39,2.51-2,1.57-2.51,3.77-1.42,7.38-2.83,6.12-.63-4.39-.78-6-2.67-2.67-3.46-.79,1.26,3.92-2.5,3.76a81.22,81.22,0,0,1-8.48-.94l-1.88-2.19s10.36-.16,17.26-3,13.5-5.5,13.5-5.5l4.23-5.49Z" />
                            <path className="cls-11" d="m246.09 370c0 1.31 0.46 2.35 1 2.35s1-1 1-2.35-0.46-2.35-1-2.35-1 1.02-1 2.35z" />
                            <path className="cls-11" d="M241.38,367.45s.47,2.36,1.72.47-.31-3.29,2-3.61,3.15.79,4.87,2.05.32-1.42,1.25-2.68,3-2.35,3-3,1.72-3.14,0-1.73-3.45,3.62-3.77,1.57,1.26-4.23,1.26-4.23l2.51-2.51s-.32,1.88,1.41,1.88.16-2.51,2-4.08,2.51,1.26,3.76-.15-1.25-3.77-.78-5.66-8.32,9.1-8.32,9.1l-7.53,8Z" />
                            <path className="cls-11" d="M252.36,381.26a66.37,66.37,0,0,1-.31-7.06c.15-2,.63-4.71,1.42-4.87s1.09-.16,1.56,1.11a1.2,1.2,0,0,0,1.73.62,5.33,5.33,0,0,1,.63-4.08c1.25-1.73,1.88-3.45,2.19-2s-3.45,10.52-3.45,10.52Z" />
                            <line className="cls-3" x1="186.7" x2="213.04" y1="114.7" y2="60.6" />
                            <line className="cls-3" x1="194.18" x2="231.54" y1="124.31" y2="80.89" />
                            <line className="cls-3" x1="202.01" x2="250.05" y1="137.83" y2="101.88" />
                            <path className="cls-12" d="M154.53,462s-13.77,15.27-13.77,18.86,2.09,4.5,7.18,4.8,15.57,7.19,18.27,9.88-1.5.6-2.7,4.79,6.72,8.13,7.61,8.13,3.77-4.83,3.18-7.53-2.1-5.32-3.6-5.62-6.88-5.16-9.89-7.85-7.47-3.9-10.47-5.1,4.18-8.38,8.38-10.18S154.53,462,154.53,462Z" />
                            <path className="cls-12" d="m188.24 461.86s13.76 15.27 13.76 18.87-2.1 4.49-7.19 4.79-15.57 7.19-18.26 9.89 1.49 0.59 2.69 4.79-7 8.21-7.89 8.21-3.5-4.91-2.89-7.61 2.1-5.33 3.59-5.63 6.95-5.17 9.95-7.85 7.49-3.9 10.49-5.09-4.19-8.39-8.38-10.18 4.13-10.19 4.13-10.19z" />
                            <path className="cls-13" d="m186.58 391.53s10.29-6.31 4-18.2c-2.18-4.08-12.12-7.34-19.5-9.15-6 1.81-18 5.59-20.54 13-3.38 10 5 14.06 5 14.06z" />
                            <path className="cls-14" d="M154.42,371.66s2.51,11.33,10.47,15.18c2.37,1.14,8.79.61,12.15,0s11-11.41,10.17-17.28" />
                            <path className="cls-15" d="M171.2,386c-15.83,1.3-28.7,9.39-28.7,34,0,25.4,11.28,54.1,29.23,53.39,22.14-.88,29.27-34.54,30.45-52.88C203.76,396,187,384.73,171.2,386Z" />
                            <path className="cls-15" d="m144.76 403.6s18.64 14.18 26.84 14.18 28.06-12.21 29.09-13.86" />
                            <line className="cls-15" x1="171.6" x2="171.6" y1="472.83" y2="417.78" />
                            <path className="cls-4" d="m143.58 332.17c3.11 2.43 5.37 2.74 4.52 5.78s0 3.95-2.26 5.16-7.34 0.31-7.63 4 2 6.69-0.56 10.35-7.06 8.51-6.22 10.94 16.39 16.12 17.52 18.26 1.41-3.65 0.28-4.87-8.75-10.64-9.89-13.08 4.24-11.25 7.35-14 1.41-4.26 3.95-7.3 4.81-9.13 4.81-9.13-7.91-14.6-9.33-14.6-4.79 0.61-4.79 2.74 2.25 5.75 2.25 5.75z" />
                            <path className="cls-4" d="m198.92 330.41c-3.11 2.43-5.37 2.74-4.52 5.78s0 3.95 2.25 5.17 7.35 0.3 7.63 4-2 6.69 0.57 10.34 7.06 8.52 6.21 10.94-16.38 16.13-17.51 18.26-1.41-3.65-0.28-4.87 8.76-10.64 9.89-13.08-4.24-11.25-7.35-14-1.41-4.25-3.95-7.3-4.81-9.11-4.81-9.11 7.92-14.6 9.33-14.6 4.8 0.61 4.8 2.74-2.26 5.73-2.26 5.73z" />
                            <path className="cls-16" d="m201.7 309.18a30.4 30.4 0 1 1-30.41-30.4 30.4 30.4 0 0 1 30.41 30.4z" />
                            <path className="cls-17" d="m172.43 309.17a1.25 1.25 0 1 1-1.24-1.25 1.24 1.24 0 0 1 1.24 1.25z" />
                            <path className="cls-4" d="M159.63,219c-1.37-.35-9.63-.43-10.39,0s-1.15,7.7-.63,8.43c.63.9,2.79,0,6.14,1.59,2.6,1.21,2.79,6.53-1.08,7.44-4.16,1-2.53-5.17-5.49-4-5.57,2.14,3.79,8.13,6.57,7.29,7.3-2.23,5.3-12.06,3-13.66s-4.25-.71-5.32-.69-1.19-2.59-.43-3.34c.59-.59,7,1.75,7.66.16S161,219.38,159.63,219Z" />
                            <path className="cls-4" d="m187.24 228.31a7.86 7.86 0 0 1 0.53-4.57c0.39-1.1 0.63-1.33 2-4.3 0 0-2.68-3.9-4.71 0.13-0.58 1.16-1.3 6-1.2 10.48 0.1 4.3 1 8.26 1.69 8.84 3 2.54 9.33 3.39 10.6-3.82s-4.5-10.07-8.15-6.76c-0.49 0.48-0.64 0.56-0.76 0z" />
                            <path className="cls-5" d="m190.22 230.19c-0.82 0.32-2.19 0.51-2.22 1.54a18.76 18.76 0 0 0 0.53 4.66c0.43 2 3.93 2.48 4.67-1.43 0.8-4.52-1.81-5.2-2.98-4.77z" />
                        </svg>
                        <div>
                            <span className="lockup lockup-1 text text-subTitle">TEMPLE OF <br />THELEMA</span>
                            <span className="lockup lockup-2 text text-subTitle">College of Thelema</span>
                            <span className="text">Founded in Service to the A&there4;A&there4;</span>
                        </div>
                        <Link aria-label="A Modern Mystery School" className="link link--blocker" href="#page--top" prefetch={false} ></Link>
                    </div>
                </article>
                <ul className="list list--flex info">
                    <li>
                        <h3>Quick Links</h3>
                        <ul className="list list--flex list--thumbnails u-justify--evenly">
                            <li>
                                <div className="wrapper-img wrapper-img--med">
                                    <Image loading="lazy" alt="Liber L vel Legis" width="279" height="304" src="/liberL_cover.webp" style={{ backgroundImage: 'url(/liberL_cover.webp)' }} />
                                </div>
                                <span>Liber L</span>
                                <Link aria-label="Book of the Law" className="link link--blocker" href="aa/#article--LiberL" prefetch={true} ></Link>
                            </li>
                            <li>
                                <div className="wrapper-img wrapper-img--med">
                                    <Image loading="lazy" alt="A.'.A.'." width="62" height="62" src="/seal_of_aa.webp" style={{ backgroundImage: 'url(/seal_of_aa.webp)' }} />
                                </div>
                                <span>A&there4;A&there4;</span>
                                <Link aria-label="The A&there4;A&there4" className="link link--blocker" href="aa/" prefetch={true}></Link>
                            </li>
                            <li>
                                <div className="wrapper-img wrapper-img--med wrapper-img--square">
                                    <Image loading="lazy" alt="Apply For Membership" width="62" height="62" src="/ennealeph.png" style={{ backgroundImage: 'url(/ennealeph.png)', backgroundSize: '131%' }} />
                                </div>
                                <span>Join TOT</span>
                                <Link aria-label="Memebership In Temple of Thelema" className="link link--blocker" href="./temple#article--temples" prefetch={true}></Link>
                            </li>
                            <li>
                                <div className="wrapper-img wrapper-img--med">
                                    <Image loading="lazy" alt="COT Campuses and Study Groups" width="62" height="62" src="/classes.webp" style={{ backgroundImage: 'url(/classes.webp)' }} />
                                </div>
                                <span>Classes</span>
                                <Link aria-label="College of Thelema Classes" className="link link--blocker" href="college/#article--locations" prefetch={true}></Link>
                            </li>
                            <li>
                                <div className="wrapper-img wrapper-img--med">
                                    <Image loading="lazy" alt="Tax Exempt Donations" width="62" height="62" src="/charity.webp" style={{ backgroundImage: 'url(/charity.webp)' }} />
                                </div>
                                <span>Donate</span>
                                <Link aria-label="Share the wealth, suppor our work" className="link link--blocker" href="college/#article--donate" ></Link>
                            </li>
                        </ul>
                    </li>
                </ul>
                <a aria-label="A Modern Mystery School" className="mark link" href="#page--top" >A Modern Mystery School</a>
            </header>
            <main id="page--top" className="relative">
                <aside>
                    <div className="wrapper--sticky">
                        <h2 className="md:hidden u-overflow--mobileList">A Modern Mystery School</h2>
                        <ul className="list flex md:hidden">
                            <li>
                                <Link className="px-3" href="/aa"  target="_self" prefetch={true}>A∴A∴</Link>
                            </li>
                            <li>
                                <Link className="px-3" href="/college"  target="_self" prefetch={true}>College</Link>
                            </li>
                            <li>
                                <Link className="px-3" href="/temple"  target="_self" prefetch={true}>Temple</Link>
                            </li>
                            <li>
                                <Link className="px-3" href="/publications"  target="_self" prefetch={true}>Publications</Link>
                            </li>
                            <li>
                                <Link className="px-3" href="/"  target="_self" prefetch={true}>Forum</Link>
                            </li>
                        </ul>
                        <h2>On This Page:</h2>
                        <ul className="list">
                            <li><a href="#page--top" target="_self">Thelemic Studies &amp; Initiation</a></li>
                            <li><a href="#article--news" target="_self">What&apos;s New</a></li>
                            <li><a href="#article--events" target="_self">Events</a></li>
                        </ul>
                        <h2 className="hidden md:block">Quick Links:</h2>
                        <ul className="list list--flex list--thumbnails flex-wrap">
                            <li>
                                <div className="wrapper-img wrapper-img--med">
                                    <Image loading="lazy" alt="Liber L vel Legis" width="279" height="304" src="/liberL_cover.webp" style={{ backgroundImage: 'url(/liberL_cover.webp)' }} />
                                </div>
                                <span>Liber L</span>
                                <Link aria-label="Book of the Law" className="link link--blocker" href="aa/#article--LiberL" prefetch={true} ></Link>
                            </li>
                            <li>
                                <div className="wrapper-img wrapper-img--med">
                                    <Image loading="lazy" alt="A.'.A.'." width="62" height="62" src="/seal_of_aa.webp" style={{ backgroundImage: 'url(/seal_of_aa.webp)' }} />
                                </div>
                                <span>A&there4;A&there4;</span>
                                <Link aria-label="The A&there4;A&there4" className="link link--blocker" href="aa/" prefetch={true}></Link>
                            </li>
                            <li>
                                <div className="wrapper-img wrapper-img--med wrapper-img--square">
                                    <Image loading="lazy" alt="Apply For Membership" width="62" height="62" src="/ennealeph.png" style={{ backgroundImage: 'url(/ennealeph.png)', backgroundSize: '131%' }} />
                                </div>
                                <span>Join TOT</span>
                                <Link aria-label="Memebership In Temple of Thelema" className="link link--blocker" href="./temple#article--temples" prefetch={true}></Link>
                            </li>
                            <li>
                                <div className="wrapper-img wrapper-img--med">
                                    <Image loading="lazy" alt="COT Campuses and Study Groups" width="62" height="62" src="/classes.webp" style={{ backgroundImage: 'url(/classes.webp)' }} />
                                </div>
                                <span>Classes</span>
                                <Link aria-label="College of Thelema Classes" className="link link--blocker" href="college/#article--locations" prefetch={true}></Link>
                            </li>
                            <li>
                                <div className="wrapper-img wrapper-img--med">
                                    <Image loading="lazy" alt="Tax Exempt Donations" width="62" height="62" src="/charity.webp" style={{ backgroundImage: 'url(/charity.webp)' }} />
                                </div>
                                <span>Donate</span>
                                <Link aria-label="Share the wealth, suppor our work" className="link link--blocker" href="college/#article--donate" ></Link>
                            </li>
                        </ul>
                    </div>
                </aside>
                <section>
                    <h2>Thelemic Studies &amp; Initiation</h2>
                    <article className="article article--fullWidth">
                        <h3>A Message From the Vice Chancellor</h3>
                        <strong>Do what thou wilt shall be the whole of the Law.</strong>
                        <section className="wrapper-text wrapper-text--columns">
                            <p>
                                Magick is transformative, a process of self-refinement that completely renews our personality toward greater alignment with universal love and will. Magick reveals that there is far more to the universe than meets the eye. It enhances our own natural human powers through proven exercises. It contributes to our understanding of who and what we are, and gives us the tools to achieve whatever purpose that discovery unveils.
                            </p>
                            <p>
                                The Western Mysteries in prior centuries were reserved for a portion of humanity. Only in the last century has a system emerged within that framework which intends to awaken all of humanity to the spiritual truth of who we are as individuals and as a species. The teachings and practices of Thelema bring tangible results to its practitioners, not as some promise of distant satisfaction but here and now, directly in our lives, relationships, and works. College of Thelema exists to extend this Light to all who seek to know themselves more fully.
                            </p>
                            <p>
                                Every individual has an absolute right to exercise the liberty of their inmost self. We support this right by providing the magical training which unlocks it to all who seek, from those newly interested in the expansion of consciousness to veterans of Thelema and the Western Mystery Tradition looking for the deeper instruction found through personal training, initiatory rites, and ceremonial group work.
                            </p>
                            <p>
                                No matter your purpose in visiting, we welcome you and wish you the very best in all your endeavors.
                            </p>
                        </section>
                        <strong>Love is the law, love under will.</strong>
                        <p>Yours in L.V.X.</p>
                        <ul className="list list--flex list--thumbnails thumbnail--horizontal text text--medium u-justify--evenly">
                            <li>
                                <div className="wrapper-img wrapper-img--large">
                                    <Image width="62" height="62" alt="Zeph Bender—Prolocutor" src="/profile-bender_zeph.webp" style={{ backgroundImage: 'url(/profile-bender_zeph.webp)', backgroundPosition: '50% 0' }} loading='lazy' />
                                </div>
                                <span className="text text--medium">
                                    Zeph Bender <br />
                                    Vice Chancellor, College of Thelema <br />
                                    Prolocutor, Temple of Thelema
                                </span>
                            </li>
                        </ul>
                    </article>
                    <article className="article  article--fullWidth">
                        <h3 id="article--news">What&apos;s New?!</h3>
                        <strong>The Relaunch of the Website And Forum, &amp; More!</strong>
                        <section className="wrapper-text wrapper-text--columns">
                            <strong>Website Refresh</strong>
                            <p>The last time this site was substantially updated was in 2004. Twenty years hence, it was about time. Nearly all the content from the old site has moved here, minus a Liber 185, outdated information, and broken links. This site is built on a modern architecture, is designed to work across all devices, and will have regularly updated content. In the near future, we will be adding new functionality to support the promulgation of the Law. This has been a long time coming, and we hope that you will enjoy what we provide.</p>
                            <strong>Heruraha.net Lives! Sort of&#x2026;</strong>
                            <p>The first post on Heruraha.net was on the 4th of June 2005 at 16:14, and the last post was on the 7th of Oct 2020 at 13:11. Heruraha.net served our community for 15 years, and there was a trove of valuable information we were delighted to restore. Somewhere in there, the forum software became outdated and riddled with security issues, leading the former web host to shut it down. About two years ago, we were able to get access to the database and administration of our web properties. Alongside busy lives, we migrated the data over to <a href="/forum">this new platform</a>. For the time being it will be a read-only forum for the public while we figure out how to best moderate and maintain the quality of content posted there. The choice was made to integrate this resource directly into thelema.org in a move towards becoming a single destination for Thelemic Education. </p>
                            <strong>Realitvely Recent Past</strong>
                            <p>At Spring Equinox 2022, James A. Eshelman officially assumed the position of Prolocutor General of the Temple of Thelema and appointed Zeph Bender Prolocutor over all existing temples. This demarcates a significant evolution in the Order&apos;s history in that Zeph is the first non-founder and product of the system to take up the office of Prolocutor. Our system is demanding—attaining to adepthood is a true test of the individual in the divine fabric, and moving through the tests and beyond are the success spoken of in the great texts of our philosophy. We honor Phyllis, Anna Kria, and Jim—without them, we would not be where we are today. And we are excited for this new era in our evolution.</p>
                        </section>
                    </article>
                    <article className="article article--fullWidth">
                        <h3 id="article--events">Classes, Study Groups, Events</h3>
                        {/* 
                            Need to figure you the Promise:<Element />
                            It works for what I need it for right now. 
                         */}
                        <EventCollection 
                            qry="metadata.tags.sys.id[in]=babalonSalon"
                            limit= "&limit=3"
                            order= "&order=-fields.dateAndTime"
                            title= "Babalon Salon: Events for Women"/>
                        <EventCollection 
                            qry="metadata.tags.sys.id[in]=losAngeles"
                            limit= "&limit=3"
                            order= "&order=-fields.dateAndTime"
                            title= "COT: Los Angeles Campus &amp; Harpocrates Temple" />
                        <EventCollection 
                            qry="metadata.tags.sys.id[in]=newYork"
                            limit= "&limit=3"
                            order= "&order=-fields.dateAndTime"
                            title= "COT: NYC Campus &ampp; Aiwass Temple"/>
                        <EventCollection 
                            qry="metadata.tags.sys.id[in]=bayArea"
                            limit= "&limit=3"
                            order= "&order=-fields.dateAndTime"
                            title= "COT: Bay Area Study Group &amp; Burning Hearts Pronaos"/>
                    </article>
                </section>
            </main>
            <Footer />
        </body>
    );
}
