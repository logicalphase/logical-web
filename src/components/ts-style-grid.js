import { css } from 'lit-element';
export const TsGridStyle = css`

.ts-grid, .ts-grid--alternate {
    display: grid;
    grid-column-gap: 16px;
    grid-template-columns: 4fr;
}
.ts-grid--alternate.ts-grid__no-gap, .ts-grid.ts-grid__no-gap {
    grid-column-gap: 0;
}
.ts-grid--alternate.ts-grid--horizontal-center, .ts-grid.ts-grid--horizontal-center {
    justify-items: center;
}
.ts-grid--alternate.ts-grid--horizontal-stretch, .ts-grid.ts-grid--horizontal-stretch {
    justify-items: stretch;
}
.ts-grid--alternate.ts-grid--vertical-center, .ts-grid.ts-grid--vertical-center {
    align-items: center;
}
.ts-grid--alternate.ts-grid--vertical-stretch, .ts-grid.ts-grid--vertical-stretch {
    align-items: stretch;
}
.ts-grid--alternate__col--horizontal-center, .ts-grid__col--horizontal-center {
    justify-self: center;
}
.ts-grid--alternate__col--horizontal-stretch, .ts-grid__col--horizontal-stretch {
    justify-self: stretch;
}
.ts-grid--alternate__col--vertical-center, .ts-grid__col--vertical-center {
    align-self: center;
}
.ts-grid--alternate__col--vertical-stretch, .ts-grid__col--vertical-stretch {
    align-self: center;
}
@media all and (min-width: 600px) {
  .ts-grid {
      grid-column-gap: 15px;
      grid-template-columns: repeat(12,  1fr);
  }
  .ts-grid .is-1 {
      grid-column: span 1/span 1;
  }
  .ts-grid .is-2 {
      grid-column: span 2/span 2;
  }
  .ts-grid .is-3 {
      grid-column: span 3/span 3;
  }
  .ts-grid .is-4 {
      grid-column: span 4/span 4;
  }
  .ts-grid .is-5 {
      grid-column: span 5/span 5;
  }
  .ts-grid .is-6 {
      grid-column: span 6/span 6;
  }
  .ts-grid .is-7 {
      grid-column: span 7/span 7;
  }
  .ts-grid .is-8 {
      grid-column: span 8/span 8;
  }
  .ts-grid .is-9 {
      grid-column: span 9/span 9;
  }
  .ts-grid .is-10 {
      grid-column: span 10/span 10;
  }
  .ts-grid .is-11 {
      grid-column: span 11/span 11;
  }
  .ts-grid .is-12 {
      grid-column: span 12/span 12;
  }
  .ts-grid .is-1--offset {
      grid-column-start: 2;
  }
  .ts-grid .is-2--offset {
      grid-column-start: 3;
  }
  .ts-grid .is-3--offset {
      grid-column-start: 4;
  }
  .ts-grid .is-4--offset {
      grid-column-start: 5;
  }
  .ts-grid .is-5--offset {
      grid-column-start: 6;
  }
  .ts-grid .is-6--offset {
      grid-column-start: 7;
  }
  .ts-grid .is-7--offset {
      grid-column-start: 8;
  }
  .ts-grid .is-8--offset {
      grid-column-start: 9;
  }
  .ts-grid .is-9--offset {
      grid-column-start: 10;
  }
  .ts-grid .is-10--offset {
      grid-column-start: 11;
  }
  .ts-grid .is-11--offset {
      grid-column-start: 12;
  }
  .ts-grid .is-12--offset {
      grid-column-start: 13;
  }
}
@media all and (min-width: 768px) {
  .ts-grid--alternate {
      grid-column-gap: 15px;
      grid-template-columns: repeat(12,  1fr);
  }
  .ts-grid--alternate .is-1 {
      grid-column: span 1/span 1;
  }
  .ts-grid--alternate .is-2 {
      grid-column: span 2/span 2;
  }
  .ts-grid--alternate .is-3 {
      grid-column: span 3/span 3;
  }
  .ts-grid--alternate .is-4 {
      grid-column: span 4/span 4;
  }
  .ts-grid--alternate .is-5 {
      grid-column: span 5/span 5;
  }
  .ts-grid--alternate .is-6 {
      grid-column: span 6/span 6;
  }
  .ts-grid--alternate .is-7 {
      grid-column: span 7/span 7;
  }
  .ts-grid--alternate .is-8 {
      grid-column: span 8/span 8;
  }
  .ts-grid--alternate .is-9 {
      grid-column: span 9/span 9;
  }
  .ts-grid--alternate .is-10 {
      grid-column: span 10/span 10;
  }
  .ts-grid--alternate .is-11 {
      grid-column: span 11/span 11;
  }
  .ts-grid--alternate .is-12 {
      grid-column: span 12/span 12;
  }
  .ts-grid--alternate .is-1--offset {
      grid-column-start: 2;
  }
  .ts-grid--alternate .is-2--offset {
      grid-column-start: 3;
  }
  .ts-grid--alternate .is-3--offset {
      grid-column-start: 4;
  }
  .ts-grid--alternate .is-4--offset {
      grid-column-start: 5;
  }
  .ts-grid--alternate .is-5--offset {
      grid-column-start: 6;
  }
  .ts-grid--alternate .is-6--offset {
      grid-column-start: 7;
  }
  .ts-grid--alternate .is-7--offset {
      grid-column-start: 8;
  }
  .ts-grid--alternate .is-8--offset {
      grid-column-start: 9;
  }
  .ts-grid--alternate .is-9--offset {
      grid-column-start: 10;
  }
  .ts-grid--alternate .is-10--offset {
      grid-column-start: 11;
  }
  .ts-grid--alternate .is-11--offset {
      grid-column-start: 12;
  }
  .ts-grid--alternate .is-12--offset {
      grid-column-start: 13;
  }
}
@media all and (min-width: 1024px) {
  .ts-grid, .ts-grid--alternate {
      grid-column-gap: 28px;
      grid-template-columns: repeat(12,  1fr);
  }
  .ts-grid .is-1__large, .ts-grid--alternate .is-1__large {
      grid-column: span 1/span 1;
  }
  .ts-grid .is-2__large, .ts-grid--alternate .is-2__large {
      grid-column: span 2/span 2;
  }
  .ts-grid .is-3__large, .ts-grid--alternate .is-3__large {
      grid-column: span 3/span 3;
  }
  .ts-grid .is-4__large, .ts-grid--alternate .is-4__large {
      grid-column: span 4/span 4;
  }
  .ts-grid .is-5__large, .ts-grid--alternate .is-5__large {
      grid-column: span 5/span 5;
  }
  .ts-grid .is-6__large, .ts-grid--alternate .is-6__large {
      grid-column: span 6/span 6;
  }
  .ts-grid .is-7__large, .ts-grid--alternate .is-7__large {
      grid-column: span 7/span 7;
  }
  .ts-grid .is-8__large, .ts-grid--alternate .is-8__large {
      grid-column: span 8/span 8;
  }
  .ts-grid .is-9__large, .ts-grid--alternate .is-9__large {
      grid-column: span 9/span 9;
  }
  .ts-grid .is-10__large, .ts-grid--alternate .is-10__large {
      grid-column: span 10/span 10;
  }
  .ts-grid .is-11__large, .ts-grid--alternate .is-11__large {
      grid-column: span 11/span 11;
  }
  .ts-grid .is-12__large, .ts-grid--alternate .is-12__large {
      grid-column: span 12/span 12;
  }
  .ts-grid .is-1__large--offset, .ts-grid--alternate .is-1__large--offset {
      grid-column-start: 2;
  }
  .ts-grid .is-2__large--offset, .ts-grid--alternate .is-2__large--offset {
      grid-column-start: 3;
  }
  .ts-grid .is-3__large--offset, .ts-grid--alternate .is-3__large--offset {
      grid-column-start: 4;
  }
  .ts-grid .is-4__large--offset, .ts-grid--alternate .is-4__large--offset {
      grid-column-start: 5;
  }
  .ts-grid .is-5__large--offset, .ts-grid--alternate .is-5__large--offset {
      grid-column-start: 6;
  }
  .ts-grid .is-6__large--offset, .ts-grid--alternate .is-6__large--offset {
      grid-column-start: 7;
  }
  .ts-grid .is-7__large--offset, .ts-grid--alternate .is-7__large--offset {
      grid-column-start: 8;
  }
  .ts-grid .is-8__large--offset, .ts-grid--alternate .is-8__large--offset {
      grid-column-start: 9;
  }
  .ts-grid .is-9__large--offset, .ts-grid--alternate .is-9__large--offset {
      grid-column-start: 10;
  }
  .ts-grid .is-10__large--offset, .ts-grid--alternate .is-10__large--offset {
      grid-column-start: 11;
  }
  .ts-grid .is-11__large--offset, .ts-grid--alternate .is-11__large--offset {
      grid-column-start: 12;
  }
  .ts-grid .is-12__large--offset, .ts-grid--alternate .is-12__large--offset {
      grid-column-start: 13;
  }
  .ts-grid--alternate__small-gap, .ts-grid__small-gap {
      grid-column-gap: 15px;
  }
}
@media all and (min-width: 1280px) {
  .ts-grid, .ts-grid--alternate {
      grid-column-gap: 28px;
      grid-template-columns: repeat(12,  1fr);
  }
  .ts-grid .is-1__xl, .ts-grid--alternate .is-1__xl {
      grid-column: span 1/span 1;
  }
  .ts-grid .is-2__xl, .ts-grid--alternate .is-2__xl {
      grid-column: span 2/span 2;
  }
  .ts-grid .is-3__xl, .ts-grid--alternate .is-3__xl {
      grid-column: span 3/span 3;
  }
  .ts-grid .is-4__xl, .ts-grid--alternate .is-4__xl {
      grid-column: span 4/span 4;
  }
  .ts-grid .is-5__xl, .ts-grid--alternate .is-5__xl {
      grid-column: span 5/span 5;
  }
  .ts-grid .is-6__xl, .ts-grid--alternate .is-6__xl {
      grid-column: span 6/span 6;
  }
  .ts-grid .is-7__xl, .ts-grid--alternate .is-7__xl {
      grid-column: span 7/span 7;
  }
  .ts-grid .is-8__xl, .ts-grid--alternate .is-8__xl {
      grid-column: span 8/span 8;
  }
  .ts-grid .is-9__xl, .ts-grid--alternate .is-9__xl {
      grid-column: span 9/span 9;
  }
  .ts-grid .is-10__xl, .ts-grid--alternate .is-10__xl {
      grid-column: span 10/span 10;
  }
  .ts-grid .is-11__xl, .ts-grid--alternate .is-11__xl {
      grid-column: span 11/span 11;
  }
  .ts-grid .is-12__xl, .ts-grid--alternate .is-12__xl {
      grid-column: span 12/span 12;
  }
  .ts-grid .is-1__xl--offset, .ts-grid--alternate .is-1__xl--offset {
      grid-column-start: 2;
  }
  .ts-grid .is-2__xl--offset, .ts-grid--alternate .is-2__xl--offset {
      grid-column-start: 3;
  }
  .ts-grid .is-3__xl--offset, .ts-grid--alternate .is-3__xl--offset {
      grid-column-start: 4;
  }
  .ts-grid .is-4__xl--offset, .ts-grid--alternate .is-4__xl--offset {
      grid-column-start: 5;
  }
  .ts-grid .is-5__xl--offset, .ts-grid--alternate .is-5__xl--offset {
      grid-column-start: 6;
  }
  .ts-grid .is-6__xl--offset, .ts-grid--alternate .is-6__xl--offset {
      grid-column-start: 7;
  }
  .ts-grid .is-7__xl--offset, .ts-grid--alternate .is-7__xl--offset {
      grid-column-start: 8;
  }
  .ts-grid .is-8__xl--offset, .ts-grid--alternate .is-8__xl--offset {
      grid-column-start: 9;
  }
  .ts-grid .is-9__xl--offset, .ts-grid--alternate .is-9__xl--offset {
      grid-column-start: 10;
  }
  .ts-grid .is-10__xl--offset, .ts-grid--alternate .is-10__xl--offset {
      grid-column-start: 11;
  }
  .ts-grid .is-11__xl--offset, .ts-grid--alternate .is-11__xl--offset {
      grid-column-start: 12;
  }
  .ts-grid .is-12__xl--offset, .ts-grid--alternate .is-12__xl--offset {
      grid-column-start: 13;
  }
  .ts-grid--alternate__small-gap, .ts-grid__small-gap {
      grid-column-gap: 15px;
  }
}

`;