import * as React from "react";
import { alpha, Theme, Components } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { svgIconClasses } from "@mui/material/SvgIcon";
import { toggleButtonGroupClasses } from "@mui/material/ToggleButtonGroup";
import { toggleButtonClasses } from "@mui/material/ToggleButton";
import CheckBoxOutlineBlankRoundedIcon from "@mui/icons-material/CheckBoxOutlineBlankRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import { gray, brand } from "../themePrimitives";

/* eslint-disable import/prefer-default-export */
export const inputsCustomizations: Components<Theme> = {
  MuiButtonBase: {
    defaultProps: {
      disableTouchRipple: true,
      disableRipple: true
    },
    styleOverrides: {
      root: ({ theme }) => ({
        boxSizing: "border-box",
        transition: "all 100ms ease-in",
        "&:focus-visible": {
          outline: `3px solid ${alpha(theme.palette.primary.main, 0.5)}`,
          outlineOffset: "2px"
        }
      })
    }
  },
  MuiButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        boxShadow: "none",
        borderRadius: (theme.vars || theme).shape.borderRadius,
        textTransform: "none",
        variants: [
          {
            props: {
              size: "small"
            },
            style: {
              height: "2.25rem",
              padding: "8px 12px"
            }
          },
          {
            props: {
              size: "medium"
            },
            style: {
              height: "2.5rem" // 40px
            }
          },
          {
            props: {
              color: "primary",
              variant: "contained"
            },
            style: {
              color: "white",
              backgroundColor: " #4F3017",
              backgroundImage: `linear-gradient(to bottom, #4F3017, #4F3017)`,
              boxShadow: `none`,
              border: `1px solid #4F3017`,
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              "&:hover": {
                backgroundImage: "none",
                backgroundColor: " #201309",
                color: "white",
                transform: "translateY(-4px)",
                boxShadow: theme.shadows[4]
              },
              "&:active": {
                backgroundColor: "#201309"
              }
            }
          },
          {
            props: {
              color: "secondary",
              variant: "contained"
            },
            style: {
              color: "white",
              backgroundColor: brand[300],
              backgroundImage: `linear-gradient(to bottom, ${alpha(
                brand[400],
                0.8
              )}, ${brand[500]})`,
              boxShadow: `inset 0 2px 0 ${alpha(
                brand[200],
                0.2
              )}, inset 0 -2px 0 ${alpha(brand[700], 0.4)}`,
              border: `1px solid ${brand[500]}`,
              "&:hover": {
                backgroundColor: brand[700],
                boxShadow: "none"
              },
              "&:active": {
                backgroundColor: brand[700],
                backgroundImage: "none"
              }
            }
          },
          {
            props: {
              variant: "outlined"
            },
            style: {
              color: (theme.vars || theme).palette.text.primary,
              border: "1px solid",
              borderColor: gray[200],
              backgroundColor: alpha(gray[50], 0.3),
              "&:hover": {
                color: gray[500]
              },
              "&:active": {
                borderColor: gray[500]
              }
            }
          },
          {
            props: {
              color: "primary",
              variant: "outlined"
            },
            style: {
              color: "#4F3017",
              border: "1px solid",
              borderColor: "#4F3017",
              backgroundColor: alpha("#4F3017", 0.05),
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              "&:hover": {
                backgroundColor: alpha("#4F3017", 0.1),
                borderColor: "#201309",
                color: "#201309",
                transform: "translateY(-4px)",
                boxShadow: theme.shadows[4]
              },
              "&:active": {
                backgroundColor: alpha("#4F3017", 0.15)
              }
            }
          },
          {
            props: {
              color: "secondary",
              variant: "outlined"
            },
            style: {
              color: brand[700],
              border: "1px solid",
              borderColor: brand[200],
              backgroundColor: brand[50],
              "&:hover": {
                backgroundColor: brand[100],
                borderColor: brand[400]
              },
              "&:active": {
                backgroundColor: alpha(brand[200], 0.7)
              },
              ...theme.applyStyles("dark", {
                color: brand[50],
                border: "1px solid",
                borderColor: brand[900],
                backgroundColor: alpha(brand[900], 0.3),
                "&:hover": {
                  borderColor: brand[700],
                  backgroundColor: alpha(brand[900], 0.6)
                },
                "&:active": {
                  backgroundColor: alpha(brand[900], 0.5)
                }
              })
            }
          },
          {
            props: {
              variant: "text"
            },
            style: {
              color: "#201309",
              "&:hover": {
                backgroundColor: alpha("#4F3017", 0.5),
                color: "#EEDDD0"
              },
              "&:active": {
                backgroundColor: gray[200]
              }
            }
          },
          {
            props: {
              color: "secondary",
              variant: "text"
            },
            style: {
              color: brand[700],
              "&:hover": {
                backgroundColor: alpha(brand[100], 0.5)
              },
              "&:active": {
                backgroundColor: alpha(brand[200], 0.7)
              },
              ...theme.applyStyles("dark", {
                color: brand[100],
                "&:hover": {
                  backgroundColor: alpha(brand[900], 0.5)
                },
                "&:active": {
                  backgroundColor: alpha(brand[900], 0.3)
                }
              })
            }
          }
        ]
      })
    }
  },
  MuiIconButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        boxShadow: "none",
        borderRadius: (theme.vars || theme).shape.borderRadius,
        textTransform: "none",
        fontWeight: theme.typography.fontWeightMedium,
        letterSpacing: 0,
        color: (theme.vars || theme).palette.text.primary,
        border: "1px solid ",
        borderColor: gray[200],
        backgroundColor: alpha(gray[50], 0.3),
        "&:hover": {
          backgroundColor: gray[100],
          borderColor: gray[300]
        },
        "&:active": {
          backgroundColor: gray[200]
        },
        ...theme.applyStyles("dark", {
          backgroundColor: gray[800],
          borderColor: gray[700],
          "&:hover": {
            backgroundColor: gray[900],
            borderColor: gray[600]
          },
          "&:active": {
            backgroundColor: gray[900]
          }
        }),
        variants: [
          {
            props: {
              size: "small"
            },
            style: {
              width: "2.25rem",
              height: "2.25rem",
              padding: "0.25rem",
              [`& .${svgIconClasses.root}`]: { fontSize: "1rem" }
            }
          },
          {
            props: {
              size: "medium"
            },
            style: {
              width: "2.5rem",
              height: "2.5rem"
            }
          }
        ]
      })
    }
  },
  MuiToggleButtonGroup: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: "10px",
        boxShadow: `0 4px 16px ${alpha(gray[400], 0.2)}`,
        [`& .${toggleButtonGroupClasses.selected}`]: {
          color: brand[500]
        },
        ...theme.applyStyles("dark", {
          [`& .${toggleButtonGroupClasses.selected}`]: {
            color: "#fff"
          },
          boxShadow: `0 4px 16px ${alpha(brand[700], 0.5)}`
        })
      })
    }
  },
  MuiToggleButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: "12px 16px",
        textTransform: "none",
        borderRadius: "10px",
        fontWeight: 500,
        ...theme.applyStyles("dark", {
          color: gray[400],
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.5)",
          [`&.${toggleButtonClasses.selected}`]: {
            color: brand[300]
          }
        })
      })
    }
  },
  MuiCheckbox: {
    defaultProps: {
      disableRipple: true,
      icon: (
        <CheckBoxOutlineBlankRoundedIcon
          sx={{ color: "hsla(210, 0%, 0%, 0.0)" }}
        />
      ),
      checkedIcon: <CheckRoundedIcon sx={{ height: 14, width: 14 }} />,
      indeterminateIcon: <RemoveRoundedIcon sx={{ height: 14, width: 14 }} />
    },
    styleOverrides: {
      root: ({ theme }) => ({
        margin: 10,
        height: 16,
        width: 16,
        borderRadius: 5,
        border: "1px solid ",
        borderColor: alpha(gray[300], 0.8),
        boxShadow: "0 0 0 1.5px hsla(210, 0%, 0%, 0.04) inset",
        backgroundColor: alpha(gray[100], 0.4),
        transition: "border-color, background-color, 120ms ease-in",
        "&:hover": {
          borderColor: brand[300]
        },
        "&.Mui-focusVisible": {
          outline: `3px solid ${alpha(brand[500], 0.5)}`,
          outlineOffset: "2px",
          borderColor: brand[400]
        },
        "&.Mui-checked": {
          color: "white",
          backgroundColor: brand[500],
          borderColor: brand[500],
          boxShadow: `none`,
          "&:hover": {
            backgroundColor: brand[600]
          }
        },
        ...theme.applyStyles("dark", {
          borderColor: alpha(gray[700], 0.8),
          boxShadow: "0 0 0 1.5px hsl(210, 0%, 0%) inset",
          backgroundColor: alpha(gray[900], 0.8),
          "&:hover": {
            borderColor: brand[300]
          },
          "&.Mui-focusVisible": {
            borderColor: brand[400],
            outline: `3px solid ${alpha(brand[500], 0.5)}`,
            outlineOffset: "2px"
          }
        })
      })
    }
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        border: "none"
      },
      input: {
        "&::placeholder": {
          opacity: 0.7,
          color: gray[500]
        }
      }
    }
  },
  MuiOutlinedInput: {
    styleOverrides: {
      input: {
        padding: 0
      },
      root: ({ theme }) => ({
        padding: "8px 12px",
        color: (theme.vars || theme).palette.text.primary,
        borderRadius: (theme.vars || theme).shape.borderRadius,
        border: `1px solid ${(theme.vars || theme).palette.divider}`,
        backgroundColor: (theme.vars || theme).palette.background.default,
        transition: "border 120ms ease-in",
        "&:hover": {
          borderColor: gray[400]
        },
        [`&.${outlinedInputClasses.focused}`]: {
          outline: `3px solid ${alpha(brand[500], 0.5)}`,
          borderColor: brand[400]
        },
        ...theme.applyStyles("dark", {
          "&:hover": {
            borderColor: gray[500]
          }
        }),
        variants: [
          {
            props: {
              size: "small"
            },
            style: {
              height: "2.25rem"
            }
          },
          {
            props: {
              size: "medium"
            },
            style: {
              height: "2.5rem"
            }
          }
        ]
      }),
      notchedOutline: {
        border: "none"
      }
    }
  },
  MuiInputAdornment: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: (theme.vars || theme).palette.grey[500],
        ...theme.applyStyles("dark", {
          color: (theme.vars || theme).palette.grey[400]
        })
      })
    }
  },
  MuiFormLabel: {
    styleOverrides: {
      root: ({ theme }) => ({
        typography: theme.typography.caption,
        marginBottom: 8
      })
    }
  }
};
