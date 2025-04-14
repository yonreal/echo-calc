const CharacterPage = ({ name, tier, image, echoData, onEchoChange, maxEfficiency, setMaxEfficiency }) => {
    return (
      <div className="flex">
        {/* 왼쪽: 캐릭터 정보 + 점수 */}
        <div className="p-4 border rounded w-1/3">
          <img src={image} alt={name} className="w-24 h-24 rounded-full mx-auto" />
          <h2 className="text-center text-xl font-bold">{name}</h2>
          <p className="text-center">Tier : {tier}</p>
          <div className="mt-4">
            {echoData.map((score, index) => (
              <div key={index}>에코 {index + 1} : {score.toFixed(2)}</div>
            ))}
            <div className="font-bold mt-2">계산 점수 : {(echoData.reduce((a, b) => a + b) / echoData.length).toFixed(1)}</div>
          </div>
        </div>
  
        {/* 오른쪽: 에코 설정 폼 */}
        <div className="p-4 border rounded w-2/3 ml-4">
          {/* Echo 폼, 탭, 옵션 선택 등은 여기에! */}
          {/* 여기에 echo 설정 폼이 들어감 (단순화된 형태로 placeholder만 넣음) */}
          <h2 className="font-bold mb-2">에코 I 옵션 선택</h2>
          <p>※ 실제로는 여러 탭/드롭다운 등 넣을 수 있음</p>
          <div className="mt-4">
            최대 공평효율:
            <input
              type="number"
              value={maxEfficiency}
              onChange={(e) => setMaxEfficiency(e.target.value)}
              className="border p-1 ml-2"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default CharacterPage;
  