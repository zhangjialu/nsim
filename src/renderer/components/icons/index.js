import IconTemplate from './IconTemplate'
import withProps from '../hoc/withProps'

export const FileOutlineIcon = withProps(IconTemplate, {
  path:
    'M14,2H6C4.9,2 4,2.9 4,4V20C4,21.1 4.9,22 6,22H18C19.1,22 20,21.1 20,20V8L14,2M18,20H6V4H13V9H18V20Z'
})
export const FolderIcon = withProps(IconTemplate, {
  path:
    'M10,4H4C2.89,4 2,4.89 2,6V18C2,19.1 2.9,20 4,20H20C21.1,20 22,19.1 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z'
})
export const FolderOutlineIcon = withProps(IconTemplate, {
  path:
    'M20,18H4V8H20M20,6H12L10,4H4C2.89,4 2,4.89 2,6V18C2,19.1 2.9,20 4,20H20C21.1,20 22,19.1 22,18V8C22,6.89 21.1,6 20,6Z'
})
export const WidgetsIcon = withProps(IconTemplate, {
  path:
    'M3,3H11V7.34L16.66,1.69L22.31,7.34L16.66,13H21V21H13V13H16.66L11,7.34V11H3V3M3,13H11V21H3V13Z'
})
export const CloseIcon = withProps(IconTemplate, {
  path:
    'M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z'
})
export const PlayIcon = withProps(IconTemplate, {
  path: 'M8,5.14V19.14L19,12.14L8,5.14Z'
})
export const PauseIcon = withProps(IconTemplate, {
  path: 'M14,19H18V5H14M6,19H10V5H6V19Z'
})
export const StopIcon = withProps(IconTemplate, { path: 'M18,18H6V6H18V18Z' })
export const DownloadIcon = withProps(IconTemplate, {
  path: 'M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z'
})
export const ContentSaveIcon = withProps(IconTemplate, {
  path:
    'M15,9H5V5H15M12,19C10.34,19 9,17.66 9,16C9,14.34 10.34,13 12,13C13.66,13 15,14.34 15,16C15,17.66 13.66,19 12,19M17,3H5C3.89,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V7L17,3Z'
})
export const PlusIcon = withProps(IconTemplate, {
  path: 'M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z'
})
export const PlusBoxOutlineIcon = withProps(IconTemplate, {
  path:
    'M19,19V5H5V19H19M19,3C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H5C3.9,21 3,20.1 3,19V5C3,3.89 3.9,3 5,3H19M11,7H13V11H17V13H13V17H11V13H7V11H11V7Z'
})
