import HistoryTableContent from '../components/History/HistoryTableContent';
import TopContent from '../components/History/TopContent';
import HomeLayout from '../components/Layout/HomeLayout/HomeLayout';

const History = () => {
  return (
    <HomeLayout hideHeader>
      <div className="pb-[108px] pt-[60px]">
        <TopContent />
        <HistoryTableContent />
      </div>
    </HomeLayout>
  );
};

export default History;
