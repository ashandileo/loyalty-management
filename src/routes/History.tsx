import HistoryTableContent from '../components/History/HistoryTableContent';
import TopContent from '../components/History/TopContent';
import HomeLayout from '../components/Layout/HomeLayout/HomeLayout';
import AnimatePage from '../components/shared/AnimatePage/AnimatePage';

const History = () => {
  return (
    <HomeLayout lightHeader>
      <AnimatePage>
        <div className="pb-[108px] pt-[60px]">
          <TopContent />
          <HistoryTableContent />
        </div>
      </AnimatePage>
    </HomeLayout>
  );
};

export default History;
