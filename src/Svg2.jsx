import * as React from "react";

const GirlSvg = ({ props, shirtColorForSvg }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={600}
    height={600}
    viewBox="0 0 600 900"
    preserveAspectRatio="xMidYMid meet"
    style={{
      display: "block",
      margin: "0 auto",
      maxWidth: "100%",
      height: "auto",
    }}
    {...props}
  >
    {/* ============
        GIRL SVG
        Face + Hair + T-Shirt + Jeans + Shoes
        ============ */}

    {/* ===================== BACK HAIR ===================== */}

    <path
      fill="#38231D"
      d="
        M168 215
        C128 166 126 96 170 56
        C215 14 302 14 350 51
        C405 94 410 173 379 235
        L353 330
        L246 350
        L171 315
        Z
      "
    />

    {/* Hair highlights */}

    <path
      d="M175 90 C150 135 158 190 178 230"
      fill="none"
      stroke="#694238"
      strokeWidth="13"
      strokeLinecap="round"
    />

    <path
      d="M342 75 C382 122 379 184 355 235"
      fill="none"
      stroke="#694238"
      strokeWidth="13"
      strokeLinecap="round"
    />

    {/* ===================== NECK ===================== */}

    <path
      fill={shirtColorForSvg.skinColor}
      d="
        M242 250
        L242 305
        C255 321 283 321 298 305
        L298 250
        Z
      "
    />

    {/* ===================== FACE ===================== */}

    <path
      fill={shirtColorForSvg.skinColor}
      stroke="#B86F56"
      strokeWidth="3"
      d="
        M179 125
        C185 73 225 45 274 47
        C329 49 365 87 365 139
        C365 205 332 267 276 274
        C220 270 185 217 179 125
        Z
      "
    />

    {/* ===================== FRONT HAIR ===================== */}

    <path
      fill="#38231D"
      d="
        M178 126
        C163 83 193 39 244 29
        C299 18 353 45 371 92
        C347 77 322 70 294 70
        C247 69 210 92 178 126
        Z
      "
    />

    {/* Left hair */}

    <path
      fill="#38231D"
      d="
        M181 119
        C151 157 153 224 180 276
        C191 298 190 324 169 351
        C137 317 126 262 136 207
        C143 163 156 135 181 119
        Z
      "
    />

    {/* Right hair */}

    <path
      fill="#38231D"
      d="
        M363 112
        C392 152 392 222 365 275
        C354 298 355 324 376 351
        C408 317 419 262 409 207
        C402 163 388 133 363 112
        Z
      "
    />

    {/* ===================== EARS ===================== */}

    <ellipse
      cx="178"
      cy="156"
      rx="11"
      ry="19"
      fill={shirtColorForSvg.skinColor}
    />

    <ellipse
      cx="366"
      cy="156"
      rx="11"
      ry="19"
      fill={shirtColorForSvg.skinColor}
    />

    {/* Earrings */}

    <circle
      cx="177"
      cy="181"
      r="8"
      fill="none"
      stroke="#D9AE4A"
      strokeWidth="4"
    />

    <circle
      cx="367"
      cy="181"
      r="8"
      fill="none"
      stroke="#D9AE4A"
      strokeWidth="4"
    />

    {/* ===================== EYEBROWS ===================== */}

    <path
      d="M205 132 Q226 116 247 130"
      fill="none"
      stroke="#4A2B24"
      strokeWidth="7"
      strokeLinecap="round"
    />

    <path
      d="M302 130 Q323 116 344 132"
      fill="none"
      stroke="#4A2B24"
      strokeWidth="7"
      strokeLinecap="round"
    />

    {/* ===================== EYES ===================== */}

    {/* Left eye */}

    <ellipse cx="226" cy="155" rx="18" ry="12" fill="#FFFFFF" />

    <ellipse cx="228" cy="156" rx="8" ry="9" fill="#38251F" />

    <circle cx="231" cy="152" r="3" fill="#FFFFFF" />

    {/* Right eye */}

    <ellipse cx="323" cy="155" rx="18" ry="12" fill="#FFFFFF" />

    <ellipse cx="321" cy="156" rx="8" ry="9" fill="#38251F" />

    <circle cx="324" cy="152" r="3" fill="#FFFFFF" />

    {/* Eyelashes */}

    <path
      d="M208 148 L201 142"
      stroke="#38251F"
      strokeWidth="4"
      strokeLinecap="round"
    />

    <path
      d="M341 148 L348 142"
      stroke="#38251F"
      strokeWidth="4"
      strokeLinecap="round"
    />

    {/* ===================== NOSE ===================== */}

    <path
      d="M275 154 C268 178 267 184 277 188"
      fill="none"
      stroke="#B66C53"
      strokeWidth="3"
      strokeLinecap="round"
    />

    {/* ===================== LIPS ===================== */}

    <path
      d="
        M250 211
        Q276 193 301 211
        Q276 232 250 211
        Z
      "
      fill="#D95F70"
    />

    <path
      d="M257 211 Q276 216 294 211"
      fill="none"
      stroke="#A94051"
      strokeWidth="2"
    />

    {/* ===================== NECK SHADOW ===================== */}

    <path
      fill="#D9876A"
      opacity="0.45"
      d="
        M242 260
        Q270 276 298 260
        L298 305
        Q270 322 242 305
        Z
      "
    />

    {/* ============
        T-SHIRT
        ============ */}

    <path
      fill={shirtColorForSvg.shirtColor}
      stroke="#A9B1BA"
      strokeWidth="4"
      d="
        M242 292

        C221 300 190 310 163 324

        C131 341 108 374 96 414

        L138 443

        L169 405

        L169 518

        C215 539 331 539 377 518

        L377 405

        L408 443

        L450 414

        C438 374 415 341 383 324

        C356 310 325 300 298 292

        C285 310 255 310 242 292

        Z
      "
    />

    {/* T-shirt collar */}

    <path
      d="M242 292 Q270 322 298 292"
      fill="none"
      stroke="#A9B1BA"
      strokeWidth="7"
    />

    {/* Shirt folds */}

    <path
      d="M188 345 Q202 410 198 485"
      fill="none"
      stroke="#D4D9DE"
      strokeWidth="6"
      strokeLinecap="round"
      opacity="0.8"
    />

    <path
      d="M352 345 Q338 410 342 485"
      fill="none"
      stroke="#D4D9DE"
      strokeWidth="6"
      strokeLinecap="round"
      opacity="0.8"
    />

    {/* ===================== LEFT ARM ===================== */}

    <path
      fill={shirtColorForSvg.skinColor}
      stroke="#B66C53"
      strokeWidth="3"
      d="
        M137 360
        C111 385 102 430 110 471
        C115 493 133 503 148 491
        C164 478 158 455 155 435
        L177 391
        Z
      "
    />

    {/* Left hand */}

    <path
      fill={shirtColorForSvg.skinColor}
      d="
        M111 466
        C101 477 103 493 114 501
        C125 509 140 502 147 491
        C137 484 126 475 111 466
        Z
      "
    />

    {/* ===================== RIGHT ARM ===================== */}

    <path
      fill={shirtColorForSvg.skinColor}
      stroke="#B66C53"
      strokeWidth="3"
      d="
        M403 360
        C429 385 438 430 430 471
        C425 493 407 503 392 491
        C376 478 382 455 385 435
        L363 391
        Z
      "
    />

    {/* Right hand */}

    <path
      fill={shirtColorForSvg.skinColor}
      d="
        M429 466
        C439 477 437 493 426 501
        C415 509 400 502 393 491
        C403 484 414 475 429 466
        Z
      "
    />

    {/* ===================== JEANS WAIST ===================== */}

    <path
      fill={shirtColorForSvg.pantColor}
      stroke="#294C7B"
      strokeWidth="4"
      d="
        M169 510
        Q270 538 377 510
        L388 568
        Q270 595 158 568
        Z
      "
    />

    {/* Belt */}

    <path
      d="M164 526 Q270 553 382 526"
      fill="none"
      stroke="#292929"
      strokeWidth="10"
    />

    {/* Belt buckle */}

    <rect x="258" y="533" width="24" height="18" rx="3" fill="#D6AE48" />

    {/* ============
        LEFT JEANS LEG
        ============ */}

    <path
      fill={shirtColorForSvg.pantColor}
      stroke="#294C7B"
      strokeWidth="4"
      d="
        M158 565

        C153 628 154 694 161 757

        L174 812

        C186 827 215 827 227 811

        L270 636

        L270 580

        Z
      "
    />

    {/* ============
        RIGHT JEANS LEG
        ============ */}

    <path
      fill={shirtColorForSvg.pantColor}
      stroke="#294C7B"
      strokeWidth="4"
      d="
        M270 580

        L270 636

        L313 811

        C325 827 354 827 366 812

        L379 757

        C386 694 387 628 382 565

        Z
      "
    />

    {/* Center seam */}

    <path d="M270 585 L270 805" fill="none" stroke="#315C90" strokeWidth="5" />

    {/* ===================== JEANS POCKETS ===================== */}

    <path
      d="M172 585 Q198 606 225 611"
      fill="none"
      stroke="#82A8D1"
      strokeWidth="6"
    />

    <path
      d="M368 585 Q342 606 315 611"
      fill="none"
      stroke="#82A8D1"
      strokeWidth="6"
    />

    {/* Jeans folds */}

    <path
      d="M170 675 L205 705"
      stroke="#7199C4"
      strokeWidth="7"
      strokeLinecap="round"
    />

    <path
      d="M370 675 L335 705"
      stroke="#7199C4"
      strokeWidth="7"
      strokeLinecap="round"
    />

    <path
      d="M177 750 L207 777"
      stroke="#7199C4"
      strokeWidth="7"
      strokeLinecap="round"
    />

    <path
      d="M363 750 L333 777"
      stroke="#7199C4"
      strokeWidth="7"
      strokeLinecap="round"
    />

    {/* ===================== ANKLES ===================== */}

    <path
      fill={shirtColorForSvg.skinColor}
      d="M174 797 L227 797 L227 828 L174 828 Z"
    />

    <path
      fill={shirtColorForSvg.skinColor}
      d="M313 797 L366 797 L366 828 L313 828 Z"
    />

    {/* ============
        LEFT SHOE
        ============ */}

    <path
      fill={shirtColorForSvg.bottomColor || "#FFFFFF"}
      stroke="#9CA4AD"
      strokeWidth="4"
      d="
        M168 816

        C190 806 215 811 230 828

        L270 849

        C283 858 278 877 261 881

        L122 881

        C106 875 111 858 124 849

        L168 816

        Z
      "
    />

    {/* Left shoe sole */}

    <path
      fill="#D8DDE2"
      d="
        M113 860
        Q190 879 274 856
        L270 883
        Q190 898 118 884
        Z
      "
    />

    {/* Left shoe laces */}

    <path
      d="M172 828 L218 850"
      stroke="#8D969F"
      strokeWidth="5"
      strokeLinecap="round"
    />

    <path
      d="M166 839 L212 861"
      stroke="#8D969F"
      strokeWidth="5"
      strokeLinecap="round"
    />

    {/* ============
        RIGHT SHOE
        ============ */}

    <path
      fill={shirtColorForSvg.bottomColor || "#FFFFFF"}
      stroke="#9CA4AD"
      strokeWidth="4"
      d="
        M372 816

        C350 806 325 811 310 828

        L270 849

        C257 858 262 877 279 881

        L418 881

        C434 875 429 858 416 849

        L372 816

        Z
      "
    />

    {/* Right shoe sole */}

    <path
      fill="#D8DDE2"
      d="
        M427 860
        Q350 879 266 856
        L270 883
        Q350 898 422 884
        Z
      "
    />

    {/* Right shoe laces */}

    <path
      d="M368 828 L322 850"
      stroke="#8D969F"
      strokeWidth="5"
      strokeLinecap="round"
    />

    <path
      d="M374 839 L328 861"
      stroke="#8D969F"
      strokeWidth="5"
      strokeLinecap="round"
    />

    {/* ===================== WATCH ===================== */}

    <rect x="394" y="443" width="30" height="42" rx="8" fill="#24282D" />

    <rect x="399" y="450" width="20" height="23" rx="4" fill="#91D9FF" />
  </svg>
);

export default GirlSvg;
