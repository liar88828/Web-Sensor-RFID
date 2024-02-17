import React, {ReactNode} from 'react';

function PagesForm({back, form}: { back: ReactNode, form: ReactNode }) {
  return (
    <div className={' sm:flex justify-center items-center '}>
      <div className={'flex flex-col gap-6 m-6 '}>
        {back}
        <div className="sm:w-fit">
          {form}
        </div>
      </div>
    </div>
  );
}

export default PagesForm;
