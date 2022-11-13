import {fetchTables, getAllTables} from './redux/tablesRedux';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Table from './components/pages/Table/Table';
import TablesList from './components/pages/TablesList/TablesList';
import NotFound from './components/pages/NotFound/NotFound';
import {Container} from 'react-bootstrap';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import PageLoader from './components/common/PageLoader/PageLoader';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchTables()), [dispatch]);
  const tables = useSelector(state => getAllTables(state));

  if (tables.length === 0) return <PageLoader info="Loading tables data" />;
  else
    return (
      <div className="App">
        <Container>
          <Header />

          <Routes>
            <Route path="/" element={<TablesList />} />
            {tables.map(table => {
              return <Route key={table.id} path={'/table/' + table.id} element={<Table id={table.id} />} />;
            })}
            <Route path="/table/*" element={<Navigate to="/" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Container>
      </div>
    );
};

export default App;
