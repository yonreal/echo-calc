import CharacterPage from '../components/CharacterPage';
import carlotaImg from '../assets/carlota.png'; // 실제 경로에 따라 조정

const Carlota = () => {
  const echoData = [63.86, 64.96, 63.54, 65.86, 63.26];
  const [maxEfficiency, setMaxEfficiency] = useState(30);

  return (
    <CharacterPage
      name="카를로타"
      tier="Diamond"
      image={carlotaImg}
      echoData={echoData}
      maxEfficiency={maxEfficiency}
      setMaxEfficiency={setMaxEfficiency}
    />
  );
};

export default Carlota;
