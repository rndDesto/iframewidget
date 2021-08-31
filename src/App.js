import './App.css';
import React, { useState } from 'react';

const App = () => {
  const [linkFrame, setLinkFrame] = useState('')

  
  const handleDetailPemesanan = () => {
  const ifrm = 'https://admin-dev.logeetrans.com/pemesanan?id=e57271ab-dc07-4edf-8cd6-7b6d0b5d510e&logeeport=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmZWF0dXJlIjoiQkFTSUMiLCJlbWFpbCI6InRlc3QtZGV2Lm5wY3QxQHlvcG1haWwuY29tIiwidXNlcklkIjoiNGMzMTE5ZTAtZDVjZS00MWMxLThkZTYtN2MxOGMyYmM3YjBkIiwibmFtZSI6IkRldGEgdGVzdCAxIiwiYXZhdGFyIjoiaHR0cHM6Ly9kZXYtbWluaW8ubG9nZWV0cmFucy5jb20vbG9nZWUtdHJhbnMvYXZhdGFyLzQxYmVlYmFmLTFlZjctNDM2ZS05OTFlLTE5ZDIwODc2YzUyOC1lMTQzYjA2MS0zOGUxLTQ0YzMtYjYyMi02Zjk3OTc2NmE0ZDIuanBnIiwicm9sZXMiOlsicG9ydC1ucGN0MSIsImNhcmdvLW93bmVyIiwiY2FyZ28tYWRtaW4iXSwicGhvbmUiOiIwODUyNDUzNzgxMjEiLCJkZXZpY2VJZCI6IiIsImNvbXBhbnkiOnsiaWQiOiJiMDE4OTRkZC0zZDM5LTQyOGItODhjOC01NWNmYjc0ZDhmMGQiLCJsYXQiOjAsImxvbmciOjAsImNvbXBhbnlJZCI6ImIwMTg5NGRkLTNkMzktNDI4Yi04OGM4LTU1Y2ZiNzRkOGYwZCIsIm5hbWUiOiJOUENUT05FIiwiYWRkcmVzcyI6IkpsLiBUZXJtaW5hbCBLYWxpYmFydSBSYXlhIEthdi5CIE5vLjEsIEthbGkgQmFydSwgQ2lsaW5jaW5nLCBLb3RhIEprdCBVdGFyYSwgRGFlcmFoIEtodXN1cyBJYnVrb3RhIEoiLCJucHdwTnVtIjoiODUzODY2MjI2NDM2MDAxIiwiaXNBY3RpdmUiOnRydWV9LCJhY2Nlc3NUb2tlbiI6ImV5SmhiR2NpT2lKU1V6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUptWldGMGRYSmxJam9pUWtGVFNVTWlMQ0psYldGcGJDSTZJblJsYzNRdFpHVjJMbTV3WTNReFFIbHZjRzFoYVd3dVkyOXRJaXdpZFhObGNrbGtJam9pTkdNek1URTVaVEF0WkRWalpTMDBNV014TFRoa1pUWXROMk14T0dNeVltTTNZakJrSWl3aWJtRnRaU0k2SWtSbGRHRWdkR1Z6ZENBeElpd2lZWFpoZEdGeUlqb2lhSFIwY0hNNkx5OWtaWFl0YldsdWFXOHViRzluWldWMGNtRnVjeTVqYjIwdmJHOW5aV1V0ZEhKaGJuTXZZWFpoZEdGeUx6UXhZbVZsWW1GbUxURmxaamN0TkRNMlpTMDVPVEZsTFRFNVpESXdPRGMyWXpVeU9DMWxNVFF6WWpBMk1TMHpPR1V4TFRRMFl6TXRZall5TWkwMlpqazNPVGMyTm1FMFpESXVhbkJuSWl3aWNtOXNaWE1pT2xzaWNHOXlkQzF1Y0dOME1TSXNJbU5oY21kdkxXOTNibVZ5SWl3aVkyRnlaMjh0WVdSdGFXNGlYU3dpY0dodmJtVWlPaUl3T0RVeU5EVXpOemd4TWpFaUxDSmtaWFpwWTJWSlpDSTZJaUlzSW1OdmJYQmhibmtpT25zaWFXUWlPaUppTURFNE9UUmtaQzB6WkRNNUxUUXlPR0l0T0Roak9DMDFOV05tWWpjMFpEaG1NR1FpTENKc1lYUWlPakFzSW14dmJtY2lPakFzSW1OdmJYQmhibmxKWkNJNkltSXdNVGc1TkdSa0xUTmtNemt0TkRJNFlpMDRPR000TFRVMVkyWmlOelJrT0dZd1pDSXNJbTVoYldVaU9pSk9VRU5VVDA1Rklpd2lZV1JrY21WemN5STZJa3BzTGlCVVpYSnRhVzVoYkNCTFlXeHBZbUZ5ZFNCU1lYbGhJRXRoZGk1Q0lFNXZMakVzSUV0aGJHa2dRbUZ5ZFN3Z1EybHNhVzVqYVc1bkxDQkxiM1JoSUVwcmRDQlZkR0Z5WVN3Z1JHRmxjbUZvSUV0b2RYTjFjeUJKWW5WcmIzUmhJRW9pTENKdWNIZHdUblZ0SWpvaU9EVXpPRFkyTWpJMk5ETTJNREF4SWl3aWFYTkJZM1JwZG1VaU9uUnlkV1Y5TENKcFlYUWlPakUyTWpnM01UazFPRE1zSW1WNGNDSTZNVFl6TVRNeE1UVTRNeXdpWVhWa0lqb2lPVGRpTXpNeE9UTXRORE5tWmkwMFpUVTRMVGt4TWpRdFlqTmhPV0k1WmpjeVl6TTBJaXdpYVhOeklqb2lkR1ZzYTI5dFpHVjJJbjAuYVVXa0RTNVFyTm9JU1ZSRWRETEYzUS1wWW1EdWlOejFUcGZGcHFQWmxZMldFZG02OFRrMldrV3hINGdkNkdfVElWYWhxa1d0cHdBbnEzcGhHVzZXRzBaLWw2U1BibkdRdzBfRnZRWW81YWZEUjM4WU5DaE1XT3RiMWdNMGNCTTF1bDk5MTdQajQtSDZuSml5ZWJJODM2bTBRTlNxRjlpazFIam5ZcllxWWdZanVwbW9YaEo4aUNmdkx5WGRITzQzWU1aekp5V2ZMeGQwN2xYZ2hlQWZPaUZOWEdxWF9hQTByRjNBemY3QU5nN2ZOWGpmWHdRMDRJMWdwVTk0SlhFUklrRzNwdFE2YVI4UW04WmtlUUZMaHdFUlFZcnFXR2phYmtCdVlhREVnekpwSl9HUTdfMDM4bGFDSnotbGlBODk2TnhMSDJIbDMtTzVXdl9oMTBiTTh6VlBPLUVsdjBISTBxS0dOeUlGY2lnME9xakk4bHcyeVRTMHRpcVROeVR3ZThhaEJsMmNyaURvOTczQWgyYXM0VzFaUmo3d1VpQkhLM19vQ0JNczVKR0FWaVVYVkRjVDNldmJpczg1dGxPSzk4QzFwOGNUelMzbjhtSE5GNjFzbjNrOXROcGhOZ3RSRVA0QkNTRjRIQXk1NGRFbHk0eGhrM050MmlGaDVkWjMyNk9aTTRWU2VnY0xLNXd5VEdsQUNMSllCOGQ5UVExMXVIWkpDVnRuT0ppdDlkbGxHSUpsOHdwNkdXSVZqazRBbHRUZ0E4YjdPbGtLeHg2bTR4dEdvazROZndNSmt0amxWSmxVdDByRGx5d21oVDFNOFdsRy1PTE5VOVc1QjVycXJhSFE0d2JYU1UycXlNbXFEOXFyRzRteHR0bV9ObHNjQkQ0clJOWTNmNE0iLCJleHAiOjE2MzEzMTE1ODN9.ggfkzKvWz-muIOnnGjWGW2HmhfIqJLYIkx_EqOnvz_g'

  setLinkFrame(ifrm)
  }

  // const handleError = () => {
  //   const ifrm = 'https://admin-dev.logeetrans.com'
  
  //   setLinkFrame(ifrm)
  //   }
    const handleClose = () => {
      setLinkFrame('')
      }
  
  return (
    <div>
      <div className='buttonPesanan'>
        <div className="detailPemesanan" onClick={()=>handleDetailPemesanan()}>
          Detail Pemesanan
        </div>

        {/* <div className="detailPemesanan" onClick={()=>handleError()}>
          Contoh Error (harus logout halaman logeetrans nya dengan manual dari iframe nya)
        </div> */}
      </div>
      

      {linkFrame ? 
        <div className="linkFrame" onClick={()=>handleClose()}> 
        <p>widget halaman detail pemesanan dari admin logee truck</p>
        <iframe src={linkFrame} width="540" height="450" title="halaman detail truck" />  
        <a href="https://admin-dev.logeetrans.com/" target="_blank" rel="noreferrer">link halaman referensi bisa langsung dibuka tanpa login</a>
        <div className="closeIframe">tutup halaman</div>
        </div> : null}
    </div>
  )
}

export default App;
