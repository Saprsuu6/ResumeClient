import React from 'react';
import Marquee from 'react-fast-marquee';

import { getCryptos } from '../../services/cryptoService';
import cryptoStyles from './CryptosInfo.module.css';

type CryptoInfo = {
  name: string;
  usd: number;
  usd_24h_change: number;
}[];

type CryptoInfoError = {
  message: string;
};

const CryptosInfo = () => {
  const [cryptos, setCryptos] = React.useState<CryptoInfo | null>(null);
  const [error, setError] = React.useState<CryptoInfoError>({
    message: 'Witing to load cryptos...'
  });

  const getCryptosRemote = () => {
    getCryptos()
      ?.then((res: CryptoInfo) => {
        setCryptos(res);
      })
      .catch((err) => {
        err.then((errorData: CryptoInfoError) => {
          setError(errorData);
        });
      });
  };

  React.useEffect(() => {
    getCryptosRemote();
    const interval = setInterval(getCryptosRemote, 1 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const formatNumbers = (num: number) => {
    const numStr = num.toString();

    if (numStr.includes('.')) {
      const parts = numStr.split('.');
      // Если число меньше единицы и имеет высокую точность после запятой
      if (parts[0] === '0') {
        // Оставляем первые пять значащих цифр после запятой
        const significantDigits = parts[1].match(/^(0*[^0]{1,5})/)?.[0];
        return `0.${significantDigits}`;
      } else if (parts[0].length >= 2) {
        return `${parts[0]}.${parts[1].substring(0, 2)}`;
      } else {
        return `${parts[0]}.${parts[1].substring(0, 4)}`;
      }
    } else return numStr;
  };

  const isNumNegative = (num: number) => {
    return num < 0;
  };

  return (
    <Marquee className={cryptoStyles.marquee} autoFill={true} play={true} speed={60}>
      {!cryptos ? (
        <div className={cryptoStyles.cryptos_error}>
          <h2 className={cryptoStyles.cryptos_error_header}>{error?.message}</h2>
          <span>&#8226;</span>
        </div>
      ) : (
        cryptos?.map((crypto, index) => (
          <div key={index} className={cryptoStyles.cryptos_block}>
            <div className={cryptoStyles.cryptos_info_block}>
              <h2>{crypto.name}</h2>
              <p>${formatNumbers(crypto.usd)}</p>
              <span
                className={`${
                  isNumNegative(crypto.usd_24h_change) ? cryptoStyles.dCountNegative : cryptoStyles.dCountPositive
                }`}
              >
                {formatNumbers(crypto.usd_24h_change)}%
              </span>
            </div>
            <span>&#8226;</span>
          </div>
        ))
      )}
    </Marquee>
  );
};

export default CryptosInfo;
