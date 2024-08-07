import './Table.css';
import '../../App/index.css';

const Table: React.FC = () => {
return (
    <>
    <table>
  <thead>
    <tr>
      <th>Место</th>
      <th>Оценка</th>
      <th>Название фильма</th>
      <th>Год выхода</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>9.1</td>
      <td>Зелёная миля</td>
      <td>1999</td>
    </tr>
    <tr>
      <td>2</td>
      <td>9.1</td>
      <td>Побег из Шоушенка</td>
      <td>1994</td>
    </tr>
    <tr>
      <td>3</td>
      <td>8.6</td>
      <td>Властелин колец: Возвращение Короля</td>
      <td>2003</td>
    </tr>
  </tbody>
</table>
    </>
)
}

export default Table;