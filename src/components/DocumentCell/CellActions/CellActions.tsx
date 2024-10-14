import { twMerge } from 'tailwind-merge';

export interface CellActionsProps {
  index: number;
  className?: string;
}

export default function CellActions({
  index,
  className = undefined,
}: CellActionsProps) {
  return <div className={twMerge('', className)}>Cell Actions</div>;
}
