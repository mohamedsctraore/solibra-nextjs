interface IconProps extends React.SVGProps<SVGSVGElement> {
  iconOnly?: boolean;
}

export default function Logo({ iconOnly = false, ...props }: IconProps) {
  return (
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
           width="100.000000pt" height="80.000000pt" viewBox="0 0 224.000000 225.000000"
           preserveAspectRatio="xMidYMid meet">

        <g transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
           fill="#000000" stroke="none">
          <path d="M935 2044 c-171 -35 -307 -97 -429 -194 -172 -137 -292 -335 -338
-560 -30 -146 -22 -332 20 -457 61 -180 126 -289 240 -401 132 -128 263 -202
453 -254 113 -30 371 -33 464 -5 250 75 426 196 553 380 122 177 172 336 172
543 0 400 -185 691 -554 869 -153 74 -208 85 -402 84 -87 -1 -168 -3 -179 -5z
m364 -28 c25 -23 29 -87 6 -106 -13 -11 -13 -15 0 -33 22 -31 18 -72 -8 -103
-22 -26 -25 -26 -96 -19 l-73 7 6 32 c4 17 9 80 13 140 l6 108 63 -4 c43 -3
69 -10 83 -22z m-224 -86 c1 -52 7 -105 13 -117 22 -41 15 -51 -37 -55 l-49
-3 -6 100 c-3 55 -8 117 -12 138 l-6 38 47 -3 48 -3 2 -95z m-250 35 c3 -14 7
-36 10 -49 8 -39 43 -116 53 -116 5 0 7 11 4 25 -3 20 0 25 15 25 14 0 24 -11
33 -39 7 -21 11 -44 8 -51 -2 -7 -26 -21 -53 -31 -89 -34 -85 -34 -85 5 0 40
-44 159 -66 177 -25 20 -16 49 19 64 46 20 56 18 62 -10z m659 -2 c33 -14 67
-33 74 -42 20 -25 14 -70 -13 -97 -14 -14 -25 -34 -25 -45 0 -11 -5 -30 -11
-41 -8 -15 -8 -22 0 -28 18 -10 2 -39 -25 -46 -47 -12 -68 34 -43 90 7 14 8
33 5 43 -7 17 -8 17 -19 -2 -6 -11 -12 -31 -13 -45 -1 -14 -2 -31 -3 -37 -1
-18 -36 -16 -71 2 -35 18 -36 22 -12 55 27 39 72 151 72 181 0 24 7 39 18 39
2 0 32 -12 66 -27z m-783 -112 c75 -78 95 -170 45 -203 -18 -12 -65 -9 -94 6
-50 27 -110 123 -112 179 0 29 45 67 81 67 26 0 42 -10 80 -49z m-216 -102
c34 -30 35 -33 19 -50 -11 -12 -25 -17 -39 -13 -20 5 -44 -10 -33 -21 2 -2 39
-7 83 -11 126 -10 156 -52 90 -125 -19 -22 -35 -44 -35 -49 0 -17 -20 -11 -55
17 -27 22 -32 30 -24 45 8 15 17 17 45 12 27 -5 34 -3 34 10 0 13 -13 16 -75
16 -67 0 -79 3 -100 25 -32 31 -33 77 -2 102 12 10 28 30 34 46 7 15 15 27 17
27 3 0 21 -14 41 -31z m1335 -33 c0 -5 -20 -39 -43 -75 -24 -37 -52 -82 -63
-101 -10 -19 -25 -43 -33 -53 -14 -16 -16 -16 -43 10 -35 33 -35 48 -3 69 28
19 33 52 8 61 -15 6 -45 -20 -56 -50 -3 -8 -17 0 -40 22 -20 19 -34 38 -31 42
3 5 22 16 42 26 20 10 75 39 122 65 l84 48 28 -27 c15 -15 28 -31 28 -37z
m-565 -28 c138 -30 319 -166 390 -292 67 -121 80 -169 80 -296 0 -94 -5 -127
-24 -183 -62 -180 -212 -325 -404 -389 -93 -31 -278 -31 -367 0 -91 31 -159
73 -232 141 -192 180 -242 466 -123 707 55 113 205 253 310 291 115 42 243 49
370 21z m-901 -414 c9 -23 -5 -44 -29 -44 -28 0 -47 22 -39 43 10 28 57 29 68
1z m1574 -3 c5 -30 -10 -45 -36 -37 -26 9 -36 34 -21 53 18 21 53 12 57 -16z
m-1593 -171 c0 -18 -6 -26 -23 -28 -13 -2 -25 3 -28 12 -10 26 4 48 28 44 17
-2 23 -10 23 -28z m1620 20 c13 -20 -6 -50 -31 -50 -26 0 -40 20 -30 45 6 17
51 20 61 5z m-1609 -151 c14 -15 16 -24 8 -37 -14 -22 -41 -27 -59 -12 -19 16
-19 35 1 54 20 21 27 20 50 -5z m1589 -19 c0 -19 -6 -26 -24 -28 -30 -5 -45
10 -36 38 10 32 60 24 60 -10z m-1305 -292 c12 -13 27 -30 35 -39 21 -22 19
-32 -9 -59 -34 -31 -60 -21 -51 21 6 26 4 30 -12 27 -14 -3 -19 -15 -23 -65
-6 -74 -28 -103 -77 -103 -27 0 -37 6 -51 29 -9 17 -25 32 -34 35 -28 7 -21
31 16 60 30 23 35 24 47 10 10 -12 10 -20 1 -34 -7 -12 -8 -21 -2 -25 18 -11
27 4 40 67 6 35 19 71 27 81 22 24 69 22 93 -5z m1124 -39 l125 -61 -27 -34
c-33 -41 -55 -43 -71 -7 l-12 26 -21 -21 c-18 -17 -19 -23 -8 -36 7 -9 19 -16
26 -16 23 0 16 -24 -15 -54 l-29 -28 -16 23 c-9 13 -16 29 -16 36 0 7 -25 52
-56 99 l-57 85 23 25 c13 13 24 24 26 24 1 0 58 -27 128 -61z m-954 -85 c35
-35 0 -143 -68 -207 -39 -38 -95 -35 -126 6 -20 27 -20 28 -2 81 18 53 64 108
111 135 23 13 64 6 85 -15z m738 4 c11 -13 24 -36 28 -53 4 -16 16 -42 28 -56
12 -15 26 -35 33 -45 11 -17 12 -17 12 9 1 18 6 27 14 25 19 -7 20 -53 2 -72
-27 -27 -61 -20 -91 19 -14 19 -30 35 -35 35 -18 0 -8 -39 16 -61 34 -33 31
-45 -14 -68 -41 -21 -51 -19 -51 11 0 29 -58 150 -87 181 -31 32 -28 38 43 73
61 29 75 30 102 2z m-595 -65 c22 -7 22 -18 -2 -42 -20 -20 -66 -159 -56 -169
4 -4 14 3 23 15 12 16 21 20 31 14 12 -8 13 -16 2 -50 -6 -23 -18 -41 -25 -41
-26 0 -146 41 -146 50 0 4 11 22 25 38 28 33 65 138 65 183 0 27 1 27 33 17
17 -5 40 -12 50 -15z m407 -20 c17 -22 20 -36 16 -65 -4 -23 -2 -38 4 -38 13
0 40 -54 40 -80 0 -34 -32 -55 -104 -68 -38 -7 -70 -11 -73 -8 -3 2 -6 37 -8
78 -2 40 -11 95 -20 122 -19 56 -14 65 42 76 67 13 81 11 103 -17z m-210 -22
c0 -11 -4 -23 -10 -26 -6 -4 -10 -54 -10 -116 l0 -110 -42 3 -43 3 5 45 c3 25
5 84 5 133 l-1 87 48 0 c41 0 48 -3 48 -19z"/>
          <path d="M1236 1957 c-5 -15 -6 -31 -2 -34 11 -11 18 5 14 34 l-4 28 -8 -28z"/>
          <path d="M1220 1840 c0 -16 4 -30 9 -30 12 0 24 37 16 50 -12 20 -25 10 -25
-20z"/>
          <path d="M1460 1880 c-7 -17 -9 -34 -6 -38 10 -9 36 27 36 50 0 28 -16 21 -30
-12z"/>
          <path d="M600 1835 c0 -16 74 -124 94 -137 16 -11 26 1 18 23 -10 27 -91 129
-103 129 -5 0 -9 -7 -9 -15z"/>
          <path d="M1695 1675 c-21 -17 -27 -27 -19 -34 7 -8 17 -2 33 20 29 39 23 45
-14 14z"/>
          <path d="M1118 1465 c-3 -6 -9 -67 -13 -137 -4 -71 -10 -128 -14 -128 -4 0
-61 44 -127 97 -125 102 -123 93 13 -55 l83 -89 -48 -6 c-26 -4 -103 -11 -172
-18 -69 -6 -131 -15 -139 -19 -7 -4 40 -10 105 -14 66 -4 148 -11 183 -14 l64
-7 -97 -117 c-53 -65 -94 -118 -92 -118 3 0 55 43 118 96 l113 95 6 -43 c4
-24 12 -110 20 -193 l13 -150 13 135 c7 74 15 163 18 198 l7 62 96 -81 c53
-45 106 -89 117 -98 10 -9 -17 26 -60 77 -44 51 -88 104 -98 117 l-17 23 37 6
c21 3 106 10 188 17 83 6 151 12 152 13 2 1 -79 8 -180 15 -100 7 -184 15
-186 17 -5 5 12 29 109 146 93 113 92 113 -59 -19 -62 -54 -107 -87 -109 -79
-2 7 -11 73 -20 147 -10 74 -20 129 -24 124z"/>
          <path d="M1686 561 c18 -31 34 -36 42 -13 2 6 -11 18 -28 27 l-32 17 18 -31z"/>
          <path d="M698 443 c-45 -61 -60 -103 -39 -103 19 0 116 151 104 163 -12 12
-18 7 -65 -60z"/>
          <path d="M1460 502 c0 -5 7 -23 16 -41 12 -24 19 -30 28 -21 8 8 7 18 -4 37
-15 27 -40 42 -40 25z"/>
          <path d="M1273 416 c4 -10 7 -24 7 -32 0 -8 5 -14 11 -14 15 0 6 53 -10 58
-10 3 -12 0 -8 -12z"/>
          <path d="M1294 304 c3 -9 6 -24 6 -35 0 -10 7 -19 15 -19 15 0 20 26 9 54 -3
9 -13 16 -21 16 -10 0 -13 -6 -9 -16z"/>
        </g>
      </svg>
  );
}
