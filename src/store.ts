import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { Cripto, Dolar } from './types';
import { getBlue, getCriptos, getOficial } from './services/coin-service';

type CoinStore = {
  dolarOficial: Dolar;
  dolarBlue: Dolar;
  criptos: Cripto[];
  fetchDolars: () => Promise<void>;
  fetchCriptos: () => Promise<void>
};

export const useCoinStore = create<CoinStore>()(
  devtools((set) => ({
    dolarOficial: {
      nombre: '',
      venta: 0,
      fechaActualizacion: "2024-07-19T15:04:00.000Z"
    },
    dolarBlue: {
      nombre: '',
      venta: 0,
      fechaActualizacion: "2024-07-19T15:04:00.000Z"
    },
    criptos: [],

    fetchDolars: async () => {
      const dolarOficial = await getOficial();
      const dolarBlue = await getBlue();
      set({ dolarOficial, dolarBlue });
    },

    fetchCriptos: async () => {
      const criptos = await getCriptos()
      set({criptos})
    }
  }))
);
