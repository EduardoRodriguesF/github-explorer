import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer"/>
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pequisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/44787022?s=460&u=eb7c963ce1a5c0f8610c010fc2bbde3e0cd78cda&v=4"
            alt="Eduardo Rodrigues"
          />
          <div>
            <strong>EduardoRodriguesF/gobarber</strong>
            <p>GoStack 14 project with React and NodeJS</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/44787022?s=460&u=eb7c963ce1a5c0f8610c010fc2bbde3e0cd78cda&v=4"
            alt="Eduardo Rodrigues"
          />
          <div>
            <strong>EduardoRodriguesF/gobarber</strong>
            <p>GoStack 14 project with React and NodeJS</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/44787022?s=460&u=eb7c963ce1a5c0f8610c010fc2bbde3e0cd78cda&v=4"
            alt="Eduardo Rodrigues"
          />
          <div>
            <strong>EduardoRodriguesF/gobarber</strong>
            <p>GoStack 14 project with React and NodeJS</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
