type SkillsTabType = {
  tabId: string;
  tabName: string;
  activeTab: string;
  handleTabClick: (tabId: string) => void;
};

const SkillsTab: React.FC<SkillsTabType> = ({
  tabId,
  tabName,
  activeTab,
  handleTabClick,
}) => {
  return (
    <>
      <li className="me-2">
        <button
          id={`${tabId}-tab`}
          type="button"
          role="tab"
          aria-controls={tabId}
          aria-selected={activeTab === tabId}
          className={`inline-block p-4 focus:underline`}
          onClick={() => handleTabClick(tabId)}
        >
          {tabName}
        </button>
      </li>
    </>
  );
};

export default SkillsTab;
