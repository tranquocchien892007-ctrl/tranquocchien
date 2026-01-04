import { GraduationCap, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
              <GraduationCap className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-foreground">
              Digital Portfolio
            </span>
          </div>

          <p className="text-sm text-muted-foreground text-center">
            Nhập môn Công nghệ số & Ứng dụng Trí tuệ nhân tạo
          </p>

          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Được tạo với</span>
            <Heart className="w-4 h-4 text-destructive fill-destructive" />
            <span>và sự nghiêm túc</span>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground">
            © 2024 - Portfolio học tập. Tất cả nội dung được viết bởi sinh viên với sự hỗ trợ có trách nhiệm của AI.
          </p>
        </div>
      </div>
    </footer>
  );
}
