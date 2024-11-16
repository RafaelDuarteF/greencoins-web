import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Hash, Clock, Activity, Database } from 'lucide-react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function TechnicalDetailsSection({ transactions }) {
  const [transactionsPerMonth, setTransactionsPerMonth] = useState({});

  useEffect(() => {
    const transactionPerMonth = {};
    transactions.forEach((tx) => {
      const date = new Date(parseInt(tx.timeStamp, 16) * 1000);
      const month = date.toLocaleString('pt-BR', { month: '2-digit' });
      const year = date.getFullYear();
      const key = `${year}-${month}`;

      transactionPerMonth[key] = transactionPerMonth[key] ? transactionPerMonth[key] + 1 : 1;
    });

    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    const lastMonths = months.slice(currentMonth - 4, currentMonth);

    lastMonths.forEach((month) => {
      const key = `${currentYear}-${month}`;
      if (!transactionPerMonth[key]) {
        transactionPerMonth[key] = 0;
      }
    });

    setTransactionsPerMonth(transactionPerMonth);
  }, [transactions]);

  const cryptoDetails = {
    hash: transactions?.[0]?.address,
    creationDate: handleHexTimestamp(transactions?.[0]?.timeStamp),
    totalTransactions: transactions?.length ?? 0,
    lastBlockHeight: parseInt(transactions?.[transactions.length -1]?.blockNumber , 16) ?? 0,
    consensusAlgorithm: "Proof of Stake (PoS)",
    transactionsPerMonth: transactionsPerMonth,
  };

  // Corrigindo a ordenação das datas
  const sortedLabels = Object.keys(cryptoDetails.transactionsPerMonth).sort((a, b) => {
    const [yearA, monthA] = a.split('-').map(Number);
    const [yearB, monthB] = b.split('-').map(Number);
    
    // Primeiro compara o ano
    if (yearA !== yearB) {
      return yearA - yearB;
    }
    // Se o ano for igual, compara o mês
    return monthA - monthB;
  });

  const data = {
    labels: sortedLabels,
    datasets: [
      {
        label: 'Transações por Mês',
        data: sortedLabels.map(key => cryptoDetails.transactionsPerMonth[key]),
        fill: true,
        borderColor: '#28a745',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
      },
    ],
  };

  function handleHexTimestamp(hexTimestamp) {
    const timestamp = parseInt(hexTimestamp, 16);
    const date = new Date(timestamp * 1000);
    return date.toLocaleString('pt-BR');
  }

  return (
    <div className="technical-details-section py-5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-center mb-5 display-4 section-title glow-text">
            Detalhes Técnicos
          </h2>

          <p className="text-center text-secondary mb-5">Confira os detalhes técnicos <b className='glow-text green-color'>reais</b> da GreenCoin, incluindo informações sobre a rede, transações recentes em tempo real e estatísticas de transações por mês.</p>

          <div className="row g-4">
            {/* Left Column - Main Stats */}
            <div className="col-md-6">
              <div className="technical-details-card h-100">
                <div className="d-flex flex-column gap-4">
                  <div className="d-flex align-items-center gap-3">
                    <Hash size={24} className="text-green" />
                    <div>
                      <p className="mb-1 fw-medium text-green">Token Contract Hash</p>
                      <p className="mb-0 small font-monospace text-gray">{cryptoDetails.hash}</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-3">
                    <Clock size={24} className="text-green" />
                    <div>
                      <p className="mb-1 fw-medium text-green">Data de Criação</p>
                      <p className="mb-0 small text-gray">{cryptoDetails.creationDate}</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-3">
                    <Activity size={24} className="text-green" />
                    <div>
                      <p className="mb-1 fw-medium text-green">Total de Transações</p>
                      <p className="mb-0 small text-gray">{cryptoDetails.totalTransactions}</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-3">
                    <Database size={24} className="text-green" />
                    <div>
                      <p className="mb-1 fw-medium text-green">Altura do Último Bloco</p>
                      <p className="mb-0 small text-gray">{cryptoDetails.lastBlockHeight}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Recent Transactions */}
            <div className="col-md-6">
              <div className="technical-details-card h-100">
                <div className="d-flex align-items-center gap-2 mb-4">
                  <Terminal size={24} className="text-green" />
                  <h3 className="mb-0 h4 fw-bold text-green">Transações Recentes</h3>
                </div>

                <div className="d-flex flex-column gap-3">
                  {transactions.map((tx, index) => (
                    <motion.div
                      key={tx.transactionHash}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="transaction-card"
                    >
                      <div className="row g-2">
                        <div className="col-6">
                          <p className="mb-1 small text-green">Hash da Transação</p>
                          <p className="mb-0 small font-monospace text-truncate text-gray">{tx.transactionHash}</p>
                        </div>
                        <div className="col-6">
                          <p className="mb-1 small text-green">Hash do Bloco</p>
                          <p className="mb-0 small text-gray text-truncate">{tx.blockHash}</p>
                        </div>
                        <div className="col-6">
                          <p className="mb-1 small text-green">Data e Hora</p>
                          <p className="mb-0 small text-gray">{handleHexTimestamp(tx.timeStamp)}</p>
                        </div>
                        <div className="col-6">
                          <p className="mb-1 small text-green">Status</p>
                          <p className="mb-0 small text-gray">Concluído</p>
                        </div>
                        <div className="col-6">
                          <p className="mb-1 small text-green">Altura do bloco</p>
                          <p className="mb-0 small text-gray">{parseInt(tx.blockNumber, 16)}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Transactions per Month Graph */}
            <div className="col-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="technical-details-card"
              >
                <h4 className="fw-medium text-green mb-4">Transações por Mês</h4>
                <div className="chart-container">
                  <Line data={data} />
                </div>
              </motion.div>
            </div>

          </div>
          <div className="col-12 mt-4">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="technical-details-card"
              >
                <div className="row g-4">
                  <div className="col-md-6">
                    <h4 className="fw-medium text-green">Algoritmo de Consenso</h4>
                    <p className="text-gray">{cryptoDetails.consensusAlgorithm}</p>
                  </div>
                  <div className="col-md-6">
                    <h4 className="fw-medium text-green">Segurança da Rede</h4>
                    <div className="progress custom-progress-bar-container">
                      <div
                        className="progress-bar custom-progress-bar"
                        role="progressbar"
                        style={{ width: '100%' }}
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p className="small text-gray mt-2">Status da Rede: 100% seguro</p>
                  </div>
                </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default TechnicalDetailsSection;
