export const inlineStyle = `

.card {
    position: relative;
    border-radius: 16;
    padding: 12px;
    background-color: #e5fcfb !important;
    min-width: 300px;
  }

.MuiButtonBase-root.learnMore {
    background-color: #fff;
    color: #fb703c;
    box-shadow: 0 2px 6px #d0efef;
    border-radius: 12px;
    min-width: 120px;
    min-height: 42px;
    font-family: var(--font-family);
    text-transform: initial;
    font-size: 0.875rem;
    font-weight: 700;
    letter-spacing: 0;
  }

.MuiTypography-h4.title {
    color: var(--font-title-color);
    font-family: var(--font-family);
    font-size: 1.125rem;
    font-weight: 700;
}
    
.MuiTypography-h4.subtitle {
    color: var(--font-subtitle-color);
    font-family: var(--font-family);
    font-size: 0.875rem;
    font-weight: 500;
}

.shell {
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(70%, 50%);
    border-radius: 50%;
    background-color: rgba(71, 167, 162, 0.12);
    padding: 40%;
    
  }

  .shell:before {
      position: absolute;
      border-radius: 50%;
      content: "";
      display: block;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: -16%;
      background-color: rgba(71, 167, 162, 0.08);
    }
`