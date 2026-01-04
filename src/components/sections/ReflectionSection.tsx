import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lightbulb, TrendingUp, Brain, Shield, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const reflections = [
  {
    icon: TrendingUp,
    title: "Thay đổi trong cách học",
    color: "from-emerald-500 to-teal-500",
    content: "Trước khi học môn này, tôi thường tiếp nhận thông tin một cách thụ động. Giờ đây, tôi đã biết đặt câu hỏi, đánh giá nguồn tin, và chủ động tìm kiếm kiến thức từ nhiều nguồn khác nhau. Việc sử dụng các công cụ số không chỉ là 'làm bài' mà trở thành thói quen học tập hàng ngày."
  },
  {
    icon: Brain,
    title: "Kỹ năng số tiến bộ nhất",
    color: "from-purple-500 to-pink-500",
    content: "Kỹ năng tìm kiếm và đánh giá thông tin là điều tôi tiến bộ rõ rệt nhất. Tôi đã học được cách sử dụng toán tử tìm kiếm, đánh giá độ tin cậy của nguồn, và quan trọng nhất - không tin ngay mọi thứ thấy trên mạng. Ngoài ra, khả năng sử dụng các công cụ hợp tác cũng được cải thiện đáng kể."
  },
  {
    icon: Lightbulb,
    title: "Sử dụng AI đúng cách",
    color: "from-orange-500 to-amber-500",
    content: "AI là công cụ hỗ trợ mạnh mẽ nhưng không phải 'cây đũa thần'. Tôi đã học được cách đặt prompt hiệu quả, kiểm chứng thông tin AI cung cấp, và quan trọng nhất - không sao chép mà sử dụng AI để gợi ý ý tưởng, sau đó tự phát triển bằng suy nghĩ của mình."
  },
  {
    icon: Shield,
    title: "Trách nhiệm học thuật",
    color: "from-blue-500 to-indigo-500",
    content: "Liêm chính học thuật không chỉ là 'không đạo văn' mà còn là thái độ trung thực trong học tập. Mỗi khi sử dụng AI hay tham khảo nguồn nào, tôi đều ghi nhận rõ ràng. Đây không chỉ là quy định mà là sự tôn trọng với bản thân và cộng đồng học thuật."
  }
];

export function ReflectionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="reflection" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div ref={ref}>
          {/* Section header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4"
            >
              <Lightbulb className="w-4 h-4" />
              <span>Phản tư</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            >
              Nhìn lại <span className="gradient-text">hành trình</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Những suy nghĩ và bài học quan trọng nhất tôi rút ra từ quá trình học tập.
            </motion.p>
          </div>

          {/* Reflections grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {reflections.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card variant="glass" className="h-full p-6 hover:shadow-card-hover transition-all duration-300">
                  <CardContent className="p-0">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-xl mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 max-w-3xl mx-auto"
          >
            <Card variant="elevated" className="p-8 relative">
              <Quote className="absolute top-4 left-4 w-8 h-8 text-primary/20" />
              <CardContent className="p-0 text-center">
                <blockquote className="text-xl md:text-2xl font-medium text-foreground mb-4 italic">
                  "Học không chỉ là tích lũy kiến thức, mà là biến đổi cách chúng ta nhìn nhận và tương tác với thế giới."
                </blockquote>
                <p className="text-muted-foreground">
                  — Phản tư cá nhân sau một học kỳ
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
