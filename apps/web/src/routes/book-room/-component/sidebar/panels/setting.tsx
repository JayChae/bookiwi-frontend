function SettingsPanel() {
  return (
    <div>
      <h3 className="mb-4 text-lg font-medium">설정</h3>
      <div className="space-y-4">
        <div className="flex flex-col">
          <span className="text-sm font-medium">글꼴 크기</span>
          <select
            id="font-size"
            className="mt-1 w-full rounded-md border border-input p-2"
          >
            <option>작게</option>
            <option>보통</option>
            <option>크게</option>
            <option>매우 크게</option>
          </select>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium">테마</span>
          <select
            id="theme-select"
            className="mt-1 w-full rounded-md border border-input p-2"
          >
            <option>라이트</option>
            <option>다크</option>
            <option>세피아</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default SettingsPanel;
