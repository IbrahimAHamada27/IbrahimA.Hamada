import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../core/services/service.service';
import { Service } from '../../core/models/service.model';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class ServicesComponent implements OnInit {
  readonly defaultServices: Service[] = [
    {
      _id: 'srv-1',
      title: 'فحص واختبار البرمجيات (تيستر & QA Automation)',
      description: 'تصميم وتنفيذ أتمتة اختبارات الويب باستخدام Selenium WebDriver و Java و TestNG بمفهوم Page Object Model (POM)، الفحص عبر مختلف المتصفحات، وتوليد تقارير Allure تفاعلية.',
      icon: 'fa-solid fa-vial-circle-check'
    },
    {
      _id: 'srv-2',
      title: 'فحص واختبار واجهات الـ APIs (Postman)',
      description: 'اختبار تكاملي شامل للـ RESTful APIs باستخدام Postman، التحقق من مخططات JSON schemas، وفحص الأداء والاستجابة، وبناء مجموعات اختبار انحداري مؤتمتة.',
      icon: 'fa-solid fa-network-wired'
    },
    {
      _id: 'srv-3',
      title: 'فحص برمجيات يدوي (Manual QA Tester - ISTQB)',
      description: 'تطبيق منهجيات ISTQB في اختبار البرمجيات، تصميم خطط الاختبار الشاملة، كتابة وتوثيق حالات الاختبار والـ Bug Reports لضمان أعلى جودة للمنتج.',
      icon: 'fa-solid fa-list-check'
    },
    {
      _id: 'srv-4',
      title: 'تصميم سايت وتطوير فرونت اند وباك اند (Full-Stack)',
      description: 'تصميم سايت احترافي وتطوير تطبيقات ويب متكاملة باستخدام Angular للفرونت اند و Node.js/Express للباك اند مع قواعد بيانات MongoDB وحماية JWT.',
      icon: 'fa-solid fa-layer-group'
    },
    {
      _id: 'srv-5',
      title: 'تصميم وتطوير المنيو الذكي (Smart QR Menu)',
      description: 'نظام منيو رقمي ذكي عبر QR Code للمطاعم والكافيهات، يدعم التصنيفات الديناميكية وحساب الفاتورة المباشر وتحديثات لوحة التحكم.',
      icon: 'fa-solid fa-utensils'
    },
    {
      _id: 'srv-6',
      title: 'بوابات العيادات الطبية وحجز المواعيد',
      description: 'منصات طبية مخصصة للعيادات والأطباء تتيح حجز المواعيد، عرض التخصصات، واستعراض آراء المرضى بتصميم متوافق مع كافة الأجهزة.',
      icon: 'fa-solid fa-hospital-user'
    },
    {
      _id: 'srv-7',
      title: 'تصميم المتاجر الإلكترونية والمنصات التجارية',
      description: 'متاجر إلكترونية عالية التحويل مع كتالوج منتجات ديناميكي، فلاتر بحث متعددة، سلة مشتريات، ولوحة إدارة للمخزون والطلبات.',
      icon: 'fa-solid fa-cart-shopping'
    },
    {
      _id: 'srv-8',
      title: 'حلول الويب الذكية والذكاء الاصطناعي (AI Solutions & 3D)',
      description: 'تكامل حلول الذكاء الاصطناعي (AI) وتجارب الويب التفاعلية ثلاثية الأبعاد Three.js لتحقيق أقصى درجات التفاعل وتطوير مشاريع هندسية ذكية.',
      icon: 'fa-solid fa-brain'
    },
    {
      _id: 'srv-9',
      title: 'تصميم سايت هبوط عالي التحويل (Landing Pages)',
      description: 'صفحات هبوط فائقة السرعة ومتوافقة مع الجوال، مبنية بأحدث تقنيات الفرونت اند لزيادة معدل التحويل واكتساب العملاء.',
      icon: 'fa-solid fa-laptop-code'
    },
    {
      _id: 'srv-10',
      title: 'دعوات إلكترونية تفاعلية للمناسبات والفعاليات',
      description: 'بطاقات ودعوات رقمية ذكية مع عد تنازلي مباشر، تأكيد حضور تفاعلي (RSVP)، وخريطة موقع جغرافية وتأثيرات بصرية مميزة.',
      icon: 'fa-solid fa-envelope-open-text'
    }
  ];

  services: Service[] = this.defaultServices;
  showAllServices = false;

  get displayedServices(): Service[] {
    return this.showAllServices ? this.services : this.services.slice(0, 8);
  }

  toggleShowMore() {
    this.showAllServices = !this.showAllServices;
  }

  constructor(private serviceService: ServiceService) {}

  async ngOnInit() {
    try {
      const res = await lastValueFrom(this.serviceService.getServices());
      if (res && res.length > 0) {
        this.services = res;
      }
    } catch (e) {
      console.warn('Backend API unavailable or empty, displaying default services', e);
      this.services = this.defaultServices;
    }
  }
}
