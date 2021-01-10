import React from "react";
import { useSnackbar } from 'react-simple-snackbar'

import Button from "@components/button/Button";

const options = {
  style: {
    marginBottom: '60px',
    backgroundColor: '#25B286',
    color: 'white',
    fontFamily: 'Circular, DNP Shuei Gothic Kin Std',
    fontSize: '12px',
    textAlign: 'center',
  },
}

function SnackBarSave({ onClick }) {
  const [openSnackbar, closeSnackbar] = useSnackbar(options)

  return (
    <div onClick={onClick}>
      <Button className="snack-bar" onClick={() => openSnackbar('設定を保存しました')}>
        <div className="section">保存する</div>
      </Button>
    </div>
  );
}

export default SnackBarSave;
