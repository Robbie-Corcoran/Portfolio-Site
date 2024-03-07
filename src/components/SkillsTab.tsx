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
  const tabClassName =
    activeTab === tabId
      ? "text-blue-600"
      : "hover:text-gray-600 hover:bg-gray-100";

  return (
    <>
      <li className="me-2">
        <button
          id={`${tabId}-tab`}
          type="button"
          role="tab"
          aria-controls={tabId}
          aria-selected={activeTab === tabId}
          className={`inline-block p-4 ${tabClassName}`}
          onClick={() => handleTabClick(tabId)}
        >
          {tabName}
        </button>
      </li>
    </>
  );
};

export default SkillsTab;
