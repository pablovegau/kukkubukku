import {
  colors,
  grayColors,
  transparentColors,
  statusColors,
  transparentGrayColors,
  spacing
} from "./";

export const spacingValues = {
  SPACING: {
    "4": spacing["4"],
    "8": spacing["8"],
    "12": spacing["12"],
    "16": spacing["16"],
    "24": spacing["24"],
    "32": spacing["32"],
    "40": spacing["40"],
    "48": spacing["48"],
    "64": spacing["64"],
    "80": spacing["80"]
  }
};

export const application = {
  HEIGHT: {
    HEADER: '72px',
    FOOTER: '48px',
  }
}

export const baseColorsValues = {
  BASE_COLOR: {
    PRIMARY: {
      LIGHT: colors.primary.light,
      MAIN: colors.primary.main,
      DARK: colors.primary.dark,
      ALPHA: {
        "5": transparentColors.primary.five,
        "20": transparentColors.primary.twenty,
        "50": transparentColors.primary.fifty,
        "80": transparentColors.primary.eighty
      }
    },
    SECONDARY: {
      LIGHT: colors.secondary.light,
      MAIN: colors.secondary.main,
      DARK: colors.secondary.dark,
      ALPHA: {
        "5": transparentColors.secondary.five,
        "20": transparentColors.secondary.twenty,
        "50": transparentColors.secondary.fifty,
        "80": transparentColors.secondary.eighty
      }
    },
    TERCIARY: {
      LIGHT: colors.terciary.light,
      MAIN: colors.terciary.main,
      DARK: colors.terciary.dark,
      ALPHA: {
        "5": transparentColors.terciary.five,
        "20": transparentColors.terciary.twenty,
        "50": transparentColors.terciary.fifty,
        "80": transparentColors.terciary.eighty
      }
    },
    QUARTENARY: {
      LIGHT: colors.quartenary.light,
      MAIN: colors.quartenary.main,
      DARK: colors.quartenary.dark,
      ALPHA: {
        "5": transparentColors.quartenary.five,
        "20": transparentColors.quartenary.twenty,
        "50": transparentColors.quartenary.fifty,
        "80": transparentColors.quartenary.eighty
      }
    },
    GRAY: {
      WHITE: grayColors.white,
      "2": grayColors.black2,
      "5": grayColors.black5,
      "10": grayColors.black10,
      "20": grayColors.black20,
      "30": grayColors.black30,
      "40": grayColors.black40,
      "50": grayColors.black50,
      "60": grayColors.black60,
      "70": grayColors.black70,
      "80": grayColors.black80,
      "90": grayColors.black90,
      BLACK: grayColors.black,
      ALPHA: {
        "5": transparentGrayColors.five,
        "20": transparentGrayColors.twenty,
        "30": transparentGrayColors.thirty,
        "50": transparentGrayColors.fifty,
        "80": transparentGrayColors.eighty
      }
    }
  },
  STATUS_COLOR: {
    ERROR: statusColors.error,
    ERROR_HOVER: statusColors.errorHover
  }
};

export const colorsValues = {
  COLOR: {
    BACKGROUND: {
      APP: {
        LIGHT: grayColors.white,
        DARK: grayColors.black90,
        ALPHA: {}
      }
    },
    TEXT: {
      PRIMARY: {
        LIGHT: baseColorsValues.BASE_COLOR.GRAY["90"],
        DARK: baseColorsValues.BASE_COLOR.GRAY.WHITE,
        INVERTED: {
          LIGHT: baseColorsValues.BASE_COLOR.GRAY.WHITE,
          DARK: baseColorsValues.BASE_COLOR.GRAY["90"]
        }
      },
      DIM: {
        LIGHT: baseColorsValues.BASE_COLOR.GRAY["50"],
        DARK: baseColorsValues.BASE_COLOR.GRAY["40"]
      },
      DIM_SOFT: {
        LIGHT: baseColorsValues.BASE_COLOR.GRAY["20"],
        DARK: baseColorsValues.BASE_COLOR.GRAY["80"]
      }
    },
    BORDER: {},
    EMPHASIS: {
      PRIMARY: {
        LIGHT: baseColorsValues.BASE_COLOR.PRIMARY.DARK,
        DARK: baseColorsValues.BASE_COLOR.PRIMARY.LIGHT
      },
      SECONDARY: {
        LIGHT: baseColorsValues.BASE_COLOR.SECONDARY.DARK,
        DARK: baseColorsValues.BASE_COLOR.SECONDARY.LIGHT
      }
    }
  }
};

export const componentColorsValues = {
  COMPONENT: {
    COLOR: {
      BACKGROUND: {
        BUTTON: {
          DISABLED: {
            LIGHT: grayColors.black5,
            DARK: grayColors.black60
          },
          PRIMARY_ACCENT: {
            ENABLED: {
              LIGHT: colors.primary.main,
              DARK: colors.primary.light
            },
            HOVER: {
              LIGHT: colors.primary.dark,
              DARK: colors.primary.dark
            }
          },
          PRIMARY: {
            ENABLED: {
              LIGHT: colors.secondary.main,
              DARK: colors.secondary.light
            },
            HOVER: {
              LIGHT: colors.secondary.dark,
              DARK: colors.secondary.dark
            }
          },
          SECONDARY: {
            ENABLED: {
              LIGHT: "transparent",
              DARK: "transparent"
            },
            HOVER: {
              LIGHT: grayColors.black5,
              DARK: grayColors.black80
            },
            DISABLED: {
              LIGHT: "transparent",
              DARK: "transparent"
            }
          },
          TERCIARY: {
            ENABLED: {
              LIGHT: grayColors.black10,
              DARK: grayColors.black60
            },
            HOVER: {
              LIGHT: grayColors.black20,
              DARK: grayColors.black80
            }
          },
          DESTRUCTIVE: {
            ENABLED: {
              LIGHT: statusColors.error,
              DARK: statusColors.error
            },
            HOVER: {
              LIGHT: statusColors.errorHover,
              DARK: statusColors.errorHover
            }
          },
          PLAIN: {
            ENABLED: {
              LIGHT: "transparent",
              DARK: "transparent"
            },
            HOVER: {
              LIGHT: grayColors.black5,
              DARK: grayColors.black80
            }
          }
        },
        CALENDAR: {
          SELECTED: {
            LIGHT: baseColorsValues.BASE_COLOR.SECONDARY.DARK,
            DARK: baseColorsValues.BASE_COLOR.SECONDARY.LIGHT
          },
          HOVER: {
            LIGHT: baseColorsValues.BASE_COLOR.TERCIARY.LIGHT,
            DARK: baseColorsValues.BASE_COLOR.TERCIARY.LIGHT
          }
        },
        THEME_SWITCH: {
          LIGHT: colors.primary.dark,
          DARK: colors.primary.light
        }
      },
      TEXT: {
        BUTTON: {
          DISABLED: {
            LIGHT: grayColors.black40,
            DARK: grayColors.black30
          },
          PRIMARY_ACCENT: {
            ENABLED: {
              LIGHT: grayColors.black,
              DARK: grayColors.black
            },
            HOVER: {
              LIGHT: grayColors.white,
              DARK: grayColors.white
            }
          },
          PRIMARY: {
            ENABLED: {
              LIGHT: grayColors.black,
              DARK: grayColors.black
            },
            HOVER: {
              LIGHT: grayColors.black,
              DARK: grayColors.black
            }
          },
          SECONDARY: {
            ENABLED: {
              LIGHT: grayColors.black90,
              DARK: grayColors.white
            },
            HOVER: {
              LIGHT: grayColors.black90,
              DARK: grayColors.white
            }
          },
          TERCIARY: {
            ENABLED: {
              LIGHT: grayColors.black90,
              DARK: grayColors.white
            },
            HOVER: {
              LIGHT: grayColors.black90,
              DARK: grayColors.white
            }
          },
          DESTRUCTIVE: {
            ENABLED: {
              LIGHT: grayColors.white,
              DARK: grayColors.white
            },
            HOVER: {
              LIGHT: grayColors.white,
              DARK: grayColors.white
            }
          },
          PLAIN: {
            ENABLED: {
              LIGHT: grayColors.black90,
              DARK: grayColors.white
            },
            HOVER: {
              LIGHT: grayColors.black90,
              DARK: grayColors.white
            }
          }
        }
      },
      BORDER: {
        BUTTON: {
          SECONDARY: {
            ENABLED: {
              LIGHT: grayColors.black90,
              DARK: grayColors.white
            },
            HOVER: {
              LIGHT: grayColors.black90,
              DARK: grayColors.white
            },
            DISABLED: {
              LIGHT: grayColors.black40,
              DARK: grayColors.black30
            }
          }
        }
      }
    }
  }
};

// AllValues is exported to be used in useColorToken hook
export const allValues = {
  ...application,
  ...baseColorsValues,
  ...colorsValues,
  ...componentColorsValues,
  ...spacingValues,
};
