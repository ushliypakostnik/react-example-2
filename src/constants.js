const lineHeightStandart = 1.428571429;

const GUIDELINE = {
  // Sizes and layouts
  gutter: 20,
  header_height: 89,
  header_height_mobile: 70,

  layout_back: 1,
  layout_front: 900,

  btn_padding_vertical: 12,
  btn_padding_horizontal: 25,
  btn_borderradius: 22,

  // Media breackpoints
  breackpoint_mg: '1700px',
  breackpoint_xl_max: '1699px',
  breackpoint_xl: '1400px',
  breackpoint_lg_max: '1399px',
  breackpoint_lg: '1250px',
  breackpoint_md_max: '1249px',
  breackpoint_md: '1050px',
  breackpoint_sm_max: '1049px',
  breackpoint_sm: '761px',
  breackpoint_xs_max: '760px',
  breackpoint_xs: '460px',
  breackpoint_min: '320px',

  // Colors
  color_white: '#ffffff',

  color_dark: '#0f1118',
  color_gray_lighten: '#fefefe',
  color_gray_light: '#f6f7f9',

  color_blue_gray_light: '#7d8ea0',
  color_blue_gray: '#6d809a',
  color_blue_gray_dark: '#333f51',

  color_blue: '#0075f3',
  color_blue_02: '#0b76ff',
  color_blue_light: '#2db2f0',
  color_blue_dark: '#27303b',

  color_green: '#17c06d',
  color_green_light: '#68f1ad',

  color_text: '#303441',
  color_text_light: '#4c5768',

  color_border: '#eff2f5',

  // Typography
  fontfamily_sans: '"Open Sans", Helvetica, Arial, sans-serif',
  fontweight_sans_regular: 400,
  fontweight_sans_bold: 700,
  letterspacing_normal: 'normal',

  fontsize_medium: 19,
  fontsize_normal: 16,
  fontsize_msmall: 15,
  fontsize_small: 14,

  // Effects
  transition_duration: '0.2s',
  transition_timingfunction: 'ease-out',
  transition_delay: '0s',
}

Object.assign(GUIDELINE, {
  color_link: GUIDELINE.color_blue,
  color_link_hover: GUIDELINE.color_blue,
  color_placeholder: GUIDELINE.color_border,

  color_active: GUIDELINE.color_blue,

  color_success: GUIDELINE.color_green,

  // Good line height for all font sizes
  lineheight_medium: Math.round(GUIDELINE.fontsize_medium * lineHeightStandart),
  lineheight_normal: Math.round(GUIDELINE.fontsize_normal * lineHeightStandart),
  lineheight_msmall: Math.round(GUIDELINE.fontsize_msmall * lineHeightStandart),
  lineheight_small: Math.round(GUIDELINE.fontsize_small * lineHeightStandart),
});

// console.log(GUIDELINE);

export default GUIDELINE;
