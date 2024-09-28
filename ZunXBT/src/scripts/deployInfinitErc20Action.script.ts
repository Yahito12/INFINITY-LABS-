
import { DeployInfinitERC20Action, type actions } from '@infinit-xyz/token/actions'
import type { z } from 'zod'

type Param = z.infer<typeof actions['init']['paramsSchema']>

// TODO: Replace with actual params
const params: Param = {


  // TODO: token owner
  "owner": undefined,


  // TODO: token name
  "name": undefined,


  // TODO: token symbol
  "symbol": undefined,


  // TODO: token max supply
  "maxSupply": undefined,


  // TODO: token mint amount when deploy
  "initialSupply": undefined
}

// TODO: Replace with actual signer id
const signer = {
  "deployer": ""
}

export default { params, signer, Action: DeployInfinitERC20Action }

