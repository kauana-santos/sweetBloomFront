import "./Table.css"

const Table = () => {
  return (
    <table>
        <thead>
            <tr>
            <th>Imagem</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Preço</th>
            <th>Disponibilidade</th>
            </tr>
        </thead>

        <tbody>
            <tr>
            <td>
                <img src="" alt="Produto 1" />
            </td>
            <td>Buquê de Rosas</td>
            <td>Buquê com rosas vermelhas</td>
            <td>R$ 59,90</td>
            <td>Disponível</td>
            </tr>

            <tr>
            <td>
                <img src="" alt="Produto 2" />
            </td>
            <td>Caixa de Chocolates</td>
            <td>Caixa com chocolates variados</td>
            <td>R$ 39,90</td>
            <td>Indisponível</td>
            </tr>
        </tbody>
    </table>
  )
}

export default Table
