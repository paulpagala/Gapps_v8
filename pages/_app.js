import '../styles/landingPage.css'
import '../styles/globals.css'
import '../styles/editor.css'
import ResponsiveAppBar from "./navbar"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GlobalProvider from '../context/global';
import { useState } from "react";
import { useRouter } from 'next/router';


function MyApp({ Component, pageProps }) {
  
  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: 'FS Elliot Pro',
      },
      button: {
        textTransform: 'none'
      }
    },
  });


//  const [dayRestriction, setDayRestriction] = useState([])
 const [checkInOptions, setCheckInOptions] = useState('')
 const [checkInRestriction, setCheckInRestriction] = useState(false)
 const [checkInAndOutRestriction, setCheckInAndOutRestriction] = useState(false);
 const [dailyCheckInRestriction, setDailyCheckInRestriction] = useState('');
 const [dailyCheckInAndOutRestriction, setDailyCheckInAndOutRestriction] = useState('');
//  const [parkingAreaName, setParkingAreaName] = useState(["paul"])
const [parkingAreaName, setParkingAreaName] = useState([])
//  const [parkingAreaAddress , setParkingAreaAddress ] = useState(["hello"]) 
const [parkingAreaAddress , setParkingAreaAddress ] = useState([]) 
//  const [parkingAreaFloor, setParkingAreaFloor] = useState([["p1"]])
const [parkingAreaFloor, setParkingAreaFloor] = useState([])
//  const [parkingAreaSlots, setParkingAreaSlots] = useState([["1"]])
 const [parkingAreaSlots, setParkingAreaSlots] = useState([])
//  const [parkingSlotNames, setParkingSlotNames] = useState([[["parking1"]]])
 const [parkingSlotNames, setParkingSlotNames] = useState([])
 const [paidAmount, setPaidAmount] = useState('')
 const [gcashNumber, setGcashNumber] = useState('')
 const [paymentRestriction, setPaymentRestriction] = useState('')
 const [cancellationRestriction, setCancellationRestriction] = useState('')
 const [earliestDateRestriction, setEarliestDateRestriction] = useState('') 
//  const [calendarRestriction, setCalendarRestriction] = useState(["Monday"])
 const [calendarRestriction, setCalendarRestriction] = useState([])
 const [RTE,setRTE] = useState('')
//  
 const [bookingStart, setBookingStart] = useState([])
 const [bookingEnd, setBookingEnd] = useState([])
//  
 const [SSOuser, setSSOuser] = useState('')
 const [parkingStatus,setParkingStatus] = useState(false)
 const [parkingAreaStatus,setParkingAreaStatus] = useState(Array.from(Array(parkingAreaName.length), () => "Active"))
 const router = useRouter()

// console.log(parkingAreaName,parkingAreaAddress,parkingAreaFloor,parkingAreaSlots,parkingSlotNames,calendarRestriction,bookingStart,bookingEnd)
  

  return (
    
    <ThemeProvider theme={theme}>
    <GlobalProvider value={{
      // dayRestriction,
      // setDayRestriction,
      checkInAndOutRestriction,
      setCheckInAndOutRestriction,
      checkInRestriction,
      setCheckInRestriction,
      checkInOptions,
      setCheckInOptions,
      dailyCheckInAndOutRestriction,
      setDailyCheckInAndOutRestriction,
      dailyCheckInRestriction,
      setDailyCheckInRestriction,
      parkingAreaName,
      setParkingAreaName,
      parkingAreaAddress,
      setParkingAreaAddress,
      parkingAreaFloor,
      setParkingAreaFloor,
      parkingAreaSlots,
      setParkingAreaSlots,
      parkingSlotNames,
      setParkingSlotNames,
      paidAmount,
      setPaidAmount,
      gcashNumber,
      setGcashNumber,
      paymentRestriction,
      setPaymentRestriction,
      cancellationRestriction,
      setCancellationRestriction,
      earliestDateRestriction,
      setEarliestDateRestriction,
      calendarRestriction,
      setCalendarRestriction,
      RTE,
      setRTE,
      bookingStart,
      bookingEnd,
      setBookingStart,
      setBookingEnd,
      SSOuser, 
      setSSOuser,
      parkingStatus,
      setParkingStatus,
      parkingAreaStatus,
      setParkingAreaStatus
      }}>
    {router.pathname !== '/' && <ResponsiveAppBar />}
    <Component {...pageProps} />
    </GlobalProvider>
    </ThemeProvider>
   
  
  );
}

export default MyApp
