import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Button from '@mui/material/Button'
import { DialogProps } from './types/CommonTypeProps'

const DialogAlerts: React.FC<DialogProps> = (props) => {
  const { open, close } = props
  return (
    <div>
      <Dialog
        open={open}
        onClose={close}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          {'このコンテンツはご利用できません'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            現在鋭意製作中になります。。。完成までしばらくお待ちください。
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={close} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default DialogAlerts
