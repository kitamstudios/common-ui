import React, { useEffect, useState } from 'react'
import * as M from '@material-ui/core'
import * as MIcon from '@material-ui/icons'
import { LocalizedString } from 'src/localization/LocalizedString'

export interface InstallAppAlertProps {
  langId: string
  prompt: any
  promptToInstall: any
}

const AlertHeadingText: LocalizedString = {
  en: 'Install for offline use?',
  id: 'Instal untuk penggunaan offline?',
}

const InstallButtonText: LocalizedString = {
  en: 'Install',
  id: 'Instal',
}

export const InstallAppAlert = ({ langId, prompt, promptToInstall }: InstallAppAlertProps) => {
  const [isVisible, setVisible] = useState(false)

  useEffect(() => {
    if (prompt) {
      setVisible(true)
    }
  }, [prompt])

  const handleClose = () => setVisible(false)

  const handleInstall = () => {
    handleClose()
    promptToInstall()
  }

  return (
    <M.Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={isVisible}
      autoHideDuration={30_000}
      onClose={handleClose}
      message={AlertHeadingText[langId]}
      action={
        <>
          <M.Button color="secondary" size="small" onClick={handleInstall}>
            {InstallButtonText[langId].toLocaleUpperCase()}
          </M.Button>
          <M.IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
            <MIcon.Close fontSize="small" />
          </M.IconButton>
        </>
      }
    />
  )
}

export default InstallAppAlert
