import React from 'react';

import { IconChecked } from '~/assets/icons';
import { ButtonRadio } from '~/components/ButtonRadio';
import { api } from '~/service/api';
import { Container, Wrapper, Details, Error } from '~/styles/pages/home';

interface IProduct {
  arrayProducts: {
    id: number;
    title: string;
    price: number;
    category: string;
  }[];
}

export default function Home({ arrayProducts }: IProduct) {
  const [selectedNet, setSelectedNet] = React.useState(0);
  const [selectedTV, setSelectedTV] = React.useState(0);
  const [selectedFixo, setSelectedFixo] = React.useState(0);
  const [errorTV, setErrorTV] = React.useState(false);
  const [errorFixo, setErrorFixo] = React.useState(false);
  const [valueNet, setValueNet] = React.useState(0);
  const [valueTV, setValueTV] = React.useState(0);
  const [valueFixo, setValueFixo] = React.useState(0);
  const [valueTotal, setValueTotal] = React.useState(0);

  function handleNet(id: number) {
    if (id === selectedNet) {
      setSelectedNet(0);
      return;
    }
    setSelectedNet(id);
    setErrorTV(false);
    setErrorFixo(false);
  }

  function handleTV(id: number) {
    if (id === selectedTV) {
      setSelectedTV(0);
      return;
    }

    if (selectedNet === 0) {
      setErrorTV(true);
      return;
    }

    setSelectedTV(id);
  }

  function handleFixo(id: number) {
    if (id === selectedFixo) {
      setSelectedFixo(0);
      return;
    }

    if (selectedNet === 0) {
      setErrorFixo(true);
      return;
    }

    setSelectedFixo(id);
  }

  React.useEffect(() => {
    if (selectedNet > 0) {
      const check = arrayProducts.filter((filter) => filter.id === selectedNet);

      setValueNet(check[0].price);
    } else {
      setValueNet(0);
    }

    if (selectedTV > 0) {
      const check = arrayProducts.filter((filter) => filter.id === selectedTV);

      setValueTV(check[0].price);
    } else {
      setValueTV(0);
    }

    if (selectedFixo > 0) {
      const check = arrayProducts.filter(
        (filter) => filter.id === selectedFixo
      );

      setValueFixo(check[0].price);
    } else {
      setValueFixo(0);
    }
  }, [selectedNet, selectedTV, selectedFixo]);

  React.useEffect(() => {
    setValueTotal(valueNet + valueTV + valueFixo);
  }, [valueNet, valueTV, valueFixo]);

  return (
    <Wrapper>
      <Container>
        <div>
          <p>Internet</p>
          <span>Selecione um plano de internet continuar</span>
          <section>
            {arrayProducts
              .filter((filter) => filter.category === 'internet')
              .map((item) => (
                <ButtonRadio
                  id={String(item.id)}
                  checked={item.id === selectedNet}
                  onClick={() => handleNet(item.id)}
                  className={item.id === selectedNet ? 'active' : undefined}
                  key={item.id}
                >
                  <>
                    <header>
                      <aside>
                        {item.id === selectedNet && <IconChecked />}
                      </aside>

                      <p>{item.title}</p>
                    </header>

                    <footer>
                      <b>
                        {item.price.toLocaleString('pt-br', {
                          style: 'currency',
                          currency: 'BRL',
                        })}
                      </b>

                      <span>+ detalhes</span>
                    </footer>
                  </>
                </ButtonRadio>
              ))}
          </section>
        </div>
        <div>
          <p>TV</p>
          <span>Selecione um plano de TV</span>

          {errorTV && (
            <Error>
              Essa opção só será habilitada se escolher um plano de internet
            </Error>
          )}
          <section>
            {arrayProducts
              .filter((filter) => filter.category === 'tv')
              .map((item) => (
                <ButtonRadio
                  id={String(item.id)}
                  checked={item.id === selectedTV}
                  onClick={() => handleTV(item.id)}
                  className={item.id === selectedTV ? 'active' : undefined}
                  key={item.id}
                >
                  <>
                    <header>
                      <aside>{item.id === selectedTV && <IconChecked />}</aside>

                      <p>{item.title}</p>
                    </header>

                    <footer>
                      <b>
                        {item.price.toLocaleString('pt-br', {
                          style: 'currency',
                          currency: 'BRL',
                        })}
                      </b>

                      <span>+ detalhes</span>
                    </footer>
                  </>
                </ButtonRadio>
              ))}
          </section>
        </div>
        <div>
          <p>Fixo</p>
          <span>Agora escolha seu pacote de telefone fixo</span>

          {errorFixo && (
            <Error>
              Essa opção só será habilitada se escolher um plano de internet
            </Error>
          )}
          <section>
            {arrayProducts
              .filter((filter) => filter.category === 'fixo')
              .map((item) => (
                <ButtonRadio
                  id={String(item.id)}
                  checked={item.id === selectedNet}
                  onClick={() => handleFixo(item.id)}
                  className={item.id === selectedFixo ? 'active' : undefined}
                  key={item.id}
                >
                  <>
                    <header>
                      <aside>
                        {item.id === selectedFixo && <IconChecked />}
                      </aside>

                      <p>{item.title}</p>
                    </header>

                    <footer>
                      <b>
                        {item.price.toLocaleString('pt-br', {
                          style: 'currency',
                          currency: 'BRL',
                        })}
                      </b>
                    </footer>
                  </>
                </ButtonRadio>
              ))}
          </section>
        </div>

        <Details>
          <div>
            <span>Taxa de instalação</span>
            <span>Grátis</span>
          </div>

          <div>
            <p>Total</p>
            <p>
              {valueTotal.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
              /mês
            </p>
          </div>

          <button type="button" disabled={selectedNet === 0}>
            Continuar
          </button>
        </Details>
      </Container>
    </Wrapper>
  );
}

export const getServerSideProps = async () => {
  const { data } = await api.get('/products');

  return {
    props: {
      arrayProducts: data,
    },
  };
};
