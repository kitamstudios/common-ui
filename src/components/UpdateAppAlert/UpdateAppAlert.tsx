import React, { useState } from 'react'
import * as M from '@material-ui/core'
import * as MIcon from '@material-ui/icons'
import { LocalizedString } from 'src/localization/LocalizedString'
import * as H from '../../hooks'

export interface UpdateAppAlertProps {
  langId: string
}

const AlertHeadingText: LocalizedString = {
  en: 'An update is available',
  id: 'Pembaruan tersedia',
}

const UpdateButtonText: LocalizedString = {
  en: 'Update',
  id: 'Memperbarui',
}

export const UpdateAppAlert = ({ langId }: UpdateAppAlertProps) => {
  const [isUpdateAvailable, setUpdateAvailable] = useState(false)

  H.useInterval(async () => {
    const version = await fetch(`${process.env.REACT_APP_RELATIVE_ROOT}/app.ver`)
      .then((r) => r.text())
      .then((t) => t.trim())
    const updateAvailable = version !== process.env.REACT_APP_VERSION
    console.log(
      'Current version',
      `"${process.env.REACT_APP_VERSION}"`,
      'New version',
      `"${version}"`,
      'Should update?',
      updateAvailable,
    )
    setUpdateAvailable(updateAvailable)
  }, 31_000)

  const handleClose = () => setUpdateAvailable(false)

  const handleUpdate = () => {
    handleClose()
    window.location.reload(true)
  }

  return (
    <M.Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={isUpdateAvailable}
      autoHideDuration={30_000}
      onClose={handleClose}
      message={AlertHeadingText[langId]}
      action={
        <>
          <M.Button color="secondary" size="small" onClick={handleUpdate}>
            {UpdateButtonText[langId].toLocaleUpperCase()}
          </M.Button>
          <M.IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
            <MIcon.Close fontSize="small" />
          </M.IconButton>
        </>
      }
    />
  )
}

export default UpdateAppAlert
