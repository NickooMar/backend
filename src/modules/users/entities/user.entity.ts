import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  email: string;

  @Column({ type: 'int', name: 'sign_in_count' })
  signInCount: number;

  @Column({ type: 'timestamp', name: 'current_sign_in_at' })
  currentSignInAt: Date;

  @Column({ type: 'timestamp', name: 'last_sign_in_at' })
  lastSignInAt: Date;

  @Column({ name: 'current_sign_in_ip' })
  currentSignInIp: string;

  @Column({ name: 'last_sign_in_ip' })
  lastSignInIp: string;

  @Column()
  department: string;

  @Column({ type: 'boolean', name: 'daily_summary' })
  dailySummary: boolean;

  @Column({ type: 'boolean', name: 'week_summary' })
  weekSummary: boolean;

  @Column({ type: 'boolean', name: 'every_transaction' })
  everyTransaction: boolean;

  @Column()
  status: string;

  @Column({ type: 'timestamp', nullable: true, name: 'deleted_at' })
  deletedAt: Date;

  @Column({ type: 'int', name: 'organization_id' })
  organizationId: number;

  @Column({ type: 'int', name: 'currency_id' })
  currencyId: number;

  @Column({ type: 'int', name: 'role_id' })
  roleId: number;

  @Column({ type: 'int', name: 'person_id' })
  personId: number;

  @Column({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;

  @Column({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date;

  @Column({ type: 'boolean', name: 'suscription_notifications' })
  subscriptionNotifications: boolean;

  @Column({ type: 'boolean', name: 'donation_notifications' })
  donationNotifications: boolean;

  @Column({ type: 'boolean', name: 'lead_notifications' })
  leadNotifications: boolean;

  @Column({ name: 'account_status' })
  accountStatus: string;

  @Column({ type: 'int', name: 'freshdesk_id' })
  freshdeskId: number;

  @Column({ type: 'boolean', name: 'crowdfunding_notifications' })
  crowdfundingNotifications: boolean;

  @Column({ name: 'profile_image' })
  profileImage: string;

  @Column({ name: 'export_format' })
  exportFormat: string;

  @Column()
  origin: string;

  @Column({ name: 'user_image' })
  userImage: string;
}
