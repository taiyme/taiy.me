import { profileComment } from '@/constants/profile';

export default function ProfileComment() {
  return (
    <div className='@md/profile:text-lg'>
      <span className='text-gray-500'>{profileComment}</span>
    </div>
  );
}
