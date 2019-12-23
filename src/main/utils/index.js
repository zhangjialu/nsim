const ID_PREFEX = 'nsim-'
let id = 0

export const getUniqueId = () => {
  return `${ID_PREFEX}${id++}`
}
